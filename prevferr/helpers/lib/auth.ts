// Next auth
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Miscellaneous
import { prisma } from "./prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  secret: "sangat-rahasia",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "loginn",
  },
  providers: [
    CredentialsProvider({
      name: "Sign In",
      id: "credentials",
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
          where: { email: credentials.email },
        });
        if (!existingUser) {
          return null;
        }

        if (
          !existingUser ||
          !(await compare(credentials.password, existingUser.password!))
        ) {
          return null;
        }

        return {
          id: existingUser.id + "",
          username: existingUser.firstname,
          email: existingUser.email,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
