import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Usuário",
          type: "text",
          placeholder: "cassioseffrin@gmail.com",
        },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        const url = process.env.NEXT_PUBLIC_APP_URLAUTH ?? "";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
   async  jwt({ token, user, account }) : Promise<any>{

    console.log("session: ", {token,user,account} );
      // const now = Date.now();
      // const expires_in = token?.expires_in ?? now / 1000;
      // const diffExpVsCurrentTime = expires_in - now / 1000 - 1090;
      // const shouldRefreshTime = Math.round(diffExpVsCurrentTime);
      // console.log(
      //   `********* FAZER REFRESH DO TOKEN em ${shouldRefreshTime} segundos`
      // );
      // if (account && user) {
      //   return {
      //     ...user,
      //     ...token,
      //     isAuthenticated: true,
      //   };
      // }
      // if (shouldRefreshTime > 404264) {
      //   // if (shouldRefreshTime < 3600) {
      //   return token;
      // }
      // token = await refreshAccessToken(token);

      // return token;
    },

   async  session({ session, token, user }): Promise< any> {
      console.log("session: ", {session,token,user} );
      // session.id = token.id;
      return Promise.resolve({ ...token });
 
    }
  },
 
  // pages:{signIn:'/signin'},
  secret: "asdfasdlfkjsdklfjsdlk345345",



});

export { handler as GET, handler as POST };
