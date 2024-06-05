import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex-center min-h-screen w-full">
        Home
         <UserButton afterSignOutUrl="/" />
      </div>
      ;
    </>
  );
};

export default page;
