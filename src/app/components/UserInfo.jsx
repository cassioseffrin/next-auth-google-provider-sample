"use client";

import Image from "next/image";
import SigninButton from "./SigninButton";
import { useSession } from "next-auth/react";

export   function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        <Image
          className="rounded-full"
          src={session?.user?.image ?? ''}
          width={60}
          height={60}
        />
        <div>
          Nome do Xiru: <span className="font-bold">{session?.user?.name ??session?.user?.firstName}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SigninButton />;
  }
}