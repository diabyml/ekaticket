import { db } from "@/libs/db";
import { z } from "zod";

export async function GET(req: Request) {
  const url = new URL(req.url);

  try {
    const { limit, page, eventType } = z
      .object({
        limit: z.string(),
        page: z.string(),
        eventType: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
        eventType: url.searchParams.get("eventType"),
      });

    // console.log("PAGINATION:");
    // console.log("page:", page);
    // console.log("limit:", limit);
    // console.log("eventType:", eventType);

    if (eventType === "popular") {
      const events = await db.event.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
        orderBy: {
          ticketsBought: "desc",
        },
      });

      return new Response(JSON.stringify(events));
    }

    if (eventType === "free") {
      const events = await db.event.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
        where: { price: 0 },
        orderBy: { createdAt: "desc" },
      });

      return new Response(JSON.stringify(events));
    }

    if (eventType === "upcoming") {
      const events = await db.event.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
        where: { hasOccurred: false, price: { gt: 0 } },
        orderBy: { createdAt: "desc" },
      });

      return new Response(JSON.stringify(events));
    }
  } catch (error) {
    return new Response("Could not fetch events", { status: 500 });
  }
}
