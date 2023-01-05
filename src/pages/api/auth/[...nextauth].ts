import NextAuth, { Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@components/db";
import { JWT } from "next-auth/jwt";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (user && user.password === credentials?.password) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            id: user?.username,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      console.log({ token })
      if (user) {
        token.username = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      console.log({ session, token })
      if (token) {
        session.username = token.username
      }
      console.log({ session, token })

      return session;
    },
  },
  secret: "secret",
  jwt: {
    secret: "secret",
  },
});
