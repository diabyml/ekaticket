import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Event } from "@prisma/client";
import { MapPin, Clock4, Plus } from "lucide-react";
import Link from "next/link";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <Card className="py-4 max-w-[300px]" as={Link} href={`/events/${event.id}`}>
      <CardBody className="overflow-hidden max-h-[250px]">
        <Image
          as={NextImage}
          alt="Event image"
          className="object-cover"
          src={event.imageUrl}
          width={300}
          height={200}
          isZoomed
        />
      </CardBody>
      <CardFooter className="block">
        <div className="">
          <div className="space-y-1">
            <h4 className="font-bold text-large">{event.title}</h4>
            <div className="flex  items-center gap-2">
              <Clock4 className="w-4 h-4" />{" "}
              <p className="text-tiny uppercase">{event.dateTime}</p>
            </div>
            <div className="flex  items-center gap-2">
              <MapPin className="w-4 h-4" />{" "}
              <p className="text-tiny uppercase">{event.location}</p>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex items-center text-secondary-400">
              <p>{event.price} FCFA </p>
              <Plus className="ml-1 w-4 h-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
