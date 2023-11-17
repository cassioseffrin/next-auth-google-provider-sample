 
 "use client";
 
import Button from "@/app/components/elements/Button";
import TextBox from "@/app/components/elements/TextBox";
 
 import React, { useEffect, useRef, useState } from "react";
 import { GetSessionParams, getProviders, getSession, signIn } from "next-auth/react"
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
 const LoginPage = () => {
   const userName = useRef("");
   const pass = useRef("");
  //  const [session, loading] = useSession()
   const [providers, setProviders] = useState({});

   useEffect(() => {
     (async () => {
       const res = await getProviders();
       setProviders(res);
     })();
   }, []);

   const onSubmit = async () => {
     const result = await signIn("credentials", {
       username: userName.current,
       password: pass.current,
       redirect: true,
       callbackUrl: "/",
     });
   };
   return (
     <div
       className={
         "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
       }
     >
       <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">

         <TextBox
           labelText="email"
           value={'cassioseffrin@gmail.com'}
           onChange={(e) => (userName.current = e.target.value)}
         />
         <TextBox
           labelText="senha"
           type={"password"}
           onChange={(e) => (pass.current = e.target.value)}
         />
         <Button onClick={onSubmit}>Entrar</Button>
       </div>
       <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Logar com:  {provider.name}
          </button>
        </div>
      ))}
    </>
     </div>
   );
 };
 
 export default LoginPage;

