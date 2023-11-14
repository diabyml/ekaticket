import EventCard from "@/components/events/EventCard";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";
import Link from "next/link";

async function PopularEvents() {
  const events = await db.event.findMany({
    take: 6,
    orderBy: {
      ticketsBought: "desc",
    },
  });

  return (
    <div>
      <div className="mb-4 ml-2">
        <Heading
          title="Événements populaire"
          className="text-2xl text-secondary-400"
        />
        <div className="">
          <Link href={"events/popular"} className="text-blue-400">
            Voir Plus
          </Link>
        </div>
      </div>
      <div className="w-full overflow-x-scroll flex flex-nowrap gap-3 pb-2  ">
        {events.map((event) => (
          <div className="flex flex-shrink-0" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularEvents;
