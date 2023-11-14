import MainContainer from "@/components/containers/MainContainer";
import { db } from "@/libs/db";
import CarouselWithPopularEvents from "./components/CarouselWithPopularEvents";
import FreeEvents from "./components/FreeEvents";
import PopularEvents from "./components/PopularEvents";
import UpcomingEvents from "./components/UpcomingEvents";

async function Page() {
  const events = await db.event.findMany({
    take: 6,
    orderBy: {
      ticketsBought: "desc",
    },
  });
  return (
    <div>
      <CarouselWithPopularEvents images={events.map((e) => e.imageUrl)} />
      <MainContainer>
        <div className="pt-6 pb-6 space-y-6">
          <PopularEvents />
          <UpcomingEvents />
          <FreeEvents />
        </div>
      </MainContainer>
    </div>
  );
}

export default Page;
