import EventList from "@/components/events/EventList";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";

async function UpcomingEvents() {
  const events = await db.event.findMany();
  return (
    <div>
      <Heading
        title="Événements à venir"
        className="text-2xl text-secondary-400 mb-2"
      />
      <EventList events={events} />
    </div>
  );
}

export default UpcomingEvents;
