import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'youremail@google.com',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        return { name: 'Luis', email: 'luis@google.com', role: 'admin' };
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as any,
      clientSecret: process.env.GITHUB_SECRET as any,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case 'oauth':
            //verify if userr exists in db
            break;
          case 'credentials':
            token.user = user;
            break;
        }
      }

      return token;
    },
    async session({ token, session, user }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
});
