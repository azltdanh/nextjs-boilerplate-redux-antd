import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: null // If set, new users will be directed here on first sign in
  // },
  providers: [
    // OAuth authentication providers...
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Password-less / email sign in
    // Providers.Email({
    //   server: process.env.MAIL_SERVER,
    //   from: process.env.MAIL_FROM,
    // }),
  ],

  // Optional SQL or MongoDB database to persist users
  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
