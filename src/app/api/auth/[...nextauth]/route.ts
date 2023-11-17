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
          value: "cassioseffrin@gmail.com",
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
  pages  : {
    signIn: '/auth/login',
  },

  callbacks: {
   async  jwt({ token, user, account }) : Promise<any>{

     console.log("jwt: ", {token,user,account} );

    if (user) {
      return {...token, id: user.id, whatsapp:   '(4)93434-3424'}

    }
    return token;
 
    },

   async  session({ session, token, user }): Promise< any> {
      console.log("session: ", {session,token,user} );
      // session.id = token.id;
      return Promise.resolve({ ...session, user: {...session.user, id:token.id, whatsapp: 'xxxw34234'} });
 
 
    }
  },
 
  // pages:{signIn:'/signin'},
  secret: "asdfasdlfkjsdklfjsdlk345345",



});

export { handler as GET, handler as POST };
