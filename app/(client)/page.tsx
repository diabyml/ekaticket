import MainContainer from "@/components/containers/MainContainer";
import { db } from "@/libs/db";
import React from "react";

async function Page() {
  const events = await db.event.findMany();
  return (
    <MainContainer>
      <p className="pt-6">HOME PAGE: {JSON.stringify(events)} </p>
    </MainContainer>
  );
}

export default Page;
