import MainContainer from "@/components/containers/MainContainer";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <MainContainer>
      <div className="pt-6">
        <UserProfile />
      </div>
    </MainContainer>
  );
}

export default Page;
