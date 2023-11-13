import EventCard from "@/components/events/EventCard";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";

async function PopularEvents() {
  const events = await db.event.findMany();
  return (
    <div>
      <Heading
        title="Événements populaire"
        className="text-2xl text-secondary-400 mb-2"
      />
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
