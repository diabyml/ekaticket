import MainContainer from "@/components/containers/MainContainer";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div className="pt-6 mx-auto flex justify-center">
      <UserProfile />
    </div>
  );
}

export default Page;
