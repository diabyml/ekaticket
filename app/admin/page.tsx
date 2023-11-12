import MainContainer from "@/components/containers/MainContainer";
import { Heading } from "@/components/ui/heading";
import { db } from "@/libs/db";
import { Button } from "@nextui-org/button";
import { ImagePlus } from "lucide-react";
import Link from "next/link";

async function Page() {
  const events = await db.event.findMany();
  return (
    <div>
      <MainContainer>
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 ">
          <Heading title="Evènements" description="Gérer les événements" />
          <Button
            as={Link}
            href="/admin/events/create"
            color="primary"
            startContent={<ImagePlus className="h-4 w-4" />}
          >
            créer évènement
          </Button>
        </div>
        <div className="pt-6">{JSON.stringify(events)}</div>
      </MainContainer>
    </div>
  );
}

export default Page;
