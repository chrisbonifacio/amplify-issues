import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { Auth } from "aws-amplify";

export default NextAuth({
  pages: {
    error: "/login", // Changing the error redirect page to our custom login page
  },
  callbacks: {
    async session(session, token) {
      return token;
    },
  },

  providers: [
    Providers.Credentials({
      name: "Amplify",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "chris" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Hello123",
        },
      },
      async authorize(credentials) {
        try {
          const user = await Auth.signIn(
            credentials.username,
            credentials.password
          );
          console.log({ user });
          if (user) {
            const data = {
              name: user.attributes.name,
              email: user.attributes.email,
              image: "asdasdasd",
              id: user.attributes.sub,
            };
            return data;
          }
        } catch (e) {
          console.log(e);
          const errorMessage = e.message;
          throw new Error(errorMessage + "&email=" + credentials.email);
        }
      },
    }),
  ],
});
