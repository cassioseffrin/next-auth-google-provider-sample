"use client";

import Button from "@/app/components/elements/Button";
import TextBox from "@/app/components/elements/TextBox";
import React, { useEffect, useRef, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  const [providers, setProviders] = useState({});

  useEffect(() => {
    (async () => {
      const res = (await getProviders()) as any;
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
        "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-grey-500 to-grey-800"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox
          labelText="email"
          value={"cassioseffrin@gmail.com"}
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
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Logar com: {provider.name}
            </button>
          </div>
        ))}
      </>
    </div>
  );
};

export default LoginPage;
