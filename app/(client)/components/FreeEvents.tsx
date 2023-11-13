import EventList from "@/components/events/EventList";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";
import Link from "next/link";
import React from "react";

async function FreeEvents() {
  const events = await db.event.findMany({
    where: { price: 0 },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
  return (
    <div>
      <div className="mb-4 ml-2">
        <Heading
          title="Événements gratuit"
          className="text-2xl text-secondary-400"
        />
        <div className="">
          <Link href={"#"} className="text-blue-400">
            Voir Plus
          </Link>
        </div>
      </div>
      <EventList
        events={events}
        emptyMessage={"Aucun événement gratuit disponible!"}
      />
    </div>
  );
}

export default FreeEvents;
