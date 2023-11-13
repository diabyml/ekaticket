import EventList from "@/components/events/EventList";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";
import React from "react";

async function FreeEvents() {
  const events = await db.event.findMany();
  return (
    <div>
      <Heading
        title="Événements gratuit"
        className="text-2xl text-secondary-400 mb-2"
      />
      <EventList events={events} />
    </div>
  );
}

export default FreeEvents;
