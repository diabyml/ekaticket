import EventList from "@/components/events/EventList";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";
import Link from "next/link";

async function UpcomingEvents() {
  const events = await db.event.findMany({
    where: { hasOccurred: false, price: { gt: 0 } },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>
      <div className="mb-4 ml-2">
        <Heading
          title="Événements à venir"
          className="text-2xl text-secondary-400"
        />
        <div className="">
          <Link href={"#"} className="text-blue-400">
            Voir Plus
          </Link>
        </div>
      </div>
      <EventList events={events} />
    </div>
  );
}

export default UpcomingEvents;
