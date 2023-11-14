import MainContainer from "@/components/containers/MainContainer";
import SmallContainer from "@/components/containers/SmallContainer";
import EventCard from "@/components/events/EventCard";
import EventList from "@/components/events/EventList";
import InfinitePopularEvents from "@/components/events/InfinitePopularEvents";
import { Heading } from "@/components/ui/heading";
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/libs/constants";
import { db } from "@/libs/db";

async function Page() {
  const events = await db.event.findMany({
    take: INFINITE_SCROLL_PAGINATION_RESULTS,
    orderBy: {
      ticketsBought: "desc",
    },
  });

  return (
    <SmallContainer>
      <div className="py-6">
        <div className="mb-4 ml-2">
          <Heading
            title="Événements populaire"
            className="text-2xl text-secondary-400"
          />
        </div>

        <InfinitePopularEvents initialEvents={events} />
      </div>
    </SmallContainer>
  );
}

export default Page;
