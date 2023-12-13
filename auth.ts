import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/lib/db"

declare module "next-auth" {
  interface Session {
    user: {
      picture?: string;
    } & Omit<User, "id">;
  }
}

export const authConfig = {
  debug: true,
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub,
    Google
  ],
  callbacks: {
    authorized(params: any) {
      return !!params.auth?.user;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
