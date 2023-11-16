"use client";

// import Image from "next/image";
import SigninButton from "./SigninButton";
import { useSession } from "next-auth/react";

export   function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-grey-600">
        <img
          className="rounded-full"
          src={session?.user?.image ?? 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg'}
          width={60}
          height={60}
        />


        <div>
          Nome do Xiru: <span className="font-bold">{session?.user?.name ??session?.firstName}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.email}</span>
        </div>
        <code>dados completos:</code>
        <pre> { JSON.stringify(session, null, 4)}</pre>
      </div>
    );
  } else {
    return <SigninButton />;
  }
}