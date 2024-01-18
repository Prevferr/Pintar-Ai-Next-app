// Next auth
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Miscellaneous
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { prisma } from "./prisma";
// import { compare } from "bcryptjs";
import * as bcryptjs from "bcryptjs";



export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@mail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.researcher.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {
          return null;
        }

        const passwordMatch = bcryptjs.compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id + "",
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        researcher: {
          ...session.user,
          username: token.username,
          id: parseInt(token.sub!),
        },
      };
    },
  },
};
