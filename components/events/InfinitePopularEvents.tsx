"use client";
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/libs/constants";
import { useIntersection } from "@mantine/hooks";
import { Event } from "@prisma/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useRef } from "react";
import EventCard from "./EventCard";

interface Props {
  initialEvents: Event[];
}

const InfinitePopularEvents: React.FC<Props> = ({ initialEvents }) => {
  const lastPostRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `/api/events?limit=${INFINITE_SCROLL_PAGINATION_RESULTS}&page=${pageParam}`;

      const { data } = await axios.get(query);
      return data as Event[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialEvents], pageParams: [1] },
    }
  );

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage(); // Load more events when the last event comes into view
    }
  }, [entry, fetchNextPage]);

  const events = data?.pages.flatMap((page) => page) ?? initialEvents;

  return (
    <div>
      <div className="space-y-4">
        {events.map((event, index) => {
          if (index === events.length - 1) {
            return (
              <div key={event.id} ref={ref} className="">
                <EventCard event={event} />
              </div>
            );
          }
          return (
            <div className="" key={event.id}>
              <EventCard event={event} />
            </div>
          );
        })}
      </div>
      {isFetchingNextPage && (
        <div className="mt-2 flex justify-center">
          <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default InfinitePopularEvents;
