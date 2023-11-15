import SmallContainer from "@/components/containers/SmallContainer";
import PaginatedEvents from "@/components/events/PaginatedEvents";
import { Heading } from "@/components/ui/heading";
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/libs/constants";
import { db } from "@/libs/db";

async function Page() {
  const events = await db.event.findMany({
    where: { price: 0 },
    orderBy: { createdAt: "desc" },
    take: INFINITE_SCROLL_PAGINATION_RESULTS,
  });

  return (
    <SmallContainer>
      <div className="py-6">
        <div className="mb-4 ml-2">
          <Heading
            title="Événements Gratuit"
            className="text-2xl text-secondary-400"
          />
        </div>

        <PaginatedEvents initialEvents={events} eventType="free" />
      </div>
    </SmallContainer>
  );
}

export default Page;
