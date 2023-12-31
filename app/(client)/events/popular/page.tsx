import SmallContainer from "@/components/containers/SmallContainer";
import PaginatedEvents from "@/components/events/PaginatedEvents";
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

        <PaginatedEvents initialEvents={events} eventType="popular" />
      </div>
    </SmallContainer>
  );
}

export default Page;
