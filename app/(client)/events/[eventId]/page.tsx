import SmallContainer from "@/components/containers/SmallContainer";
import { db } from "@/libs/db";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Clock4, MapPin } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import BuyTicketModal from "../../components/BuyTicketModal";

async function Page({ params: { eventId } }: { params: { eventId: string } }) {
  const event = await db.event.findFirst({ where: { id: eventId } });
  return (
    <SmallContainer>
      <div className="pt-6 pb-6 space-y-4">
        <div className="flex justify-center">
          <Image
            as={NextImage}
            alt="Event image"
            className="object-cover"
            src={event?.imageUrl}
            width={360}
            height={200}
            isZoomed
          />
        </div>
        <Card className="max-w-[600px] mx-auto">
          <CardHeader className="flex gap-3">
            <div className="space-y-1">
              <h4 className="font-bold text-large">{event?.title}</h4>
              <div className="flex  items-center gap-2">
                <Clock4 className="w-4 h-4" />{" "}
                <p className="text-tiny uppercase">{event?.dateTime}</p>
              </div>
              <div className="flex  items-center gap-2">
                <MapPin className="w-4 h-4" />{" "}
                <p className="text-tiny uppercase">{event?.location}</p>
              </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="font-bold">Description</div>
            <p>{event?.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="flex flex-wrap gap-4 justify-between  w-full mt-8">
              <div className="flex items-center">
                <p>{event?.price} FCFA </p>
              </div>
              {/* <Button color="primary">Achetez vos tickets</Button> */}
              <BuyTicketModal event={event as any} />
            </div>
          </CardFooter>
        </Card>
      </div>
    </SmallContainer>
  );
}

export default Page;
