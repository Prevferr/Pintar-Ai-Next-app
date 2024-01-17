import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
  }
  interface Session {
    researcher: User & {
      username: string;
    };
    token: {
      username: string;
    };
  }
}
