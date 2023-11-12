import MainContainer from "@/components/containers/MainContainer";
import EventList from "@/components/events/EventList";
import { db } from "@/libs/db";
import React from "react";

async function Page() {
  const events = await db.event.findMany();
  return (
    <MainContainer>
      <div className="pt-6 pb-6">
        <EventList events={events} />
      </div>
    </MainContainer>
  );
}

export default Page;
