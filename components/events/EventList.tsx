import { Event } from "@prisma/client";
import React from "react";
import EventCard from "./EventCard";

interface Props {
  events: Event[];
  emptyMessage?: string;
}

function EventList({ events, emptyMessage }: Props) {
  return (
    <>
      {events.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <div className="flex justify-center" key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-lg">
          {emptyMessage ? emptyMessage : "No events"}
        </div>
      )}
    </>
  );
}

export default EventList;
