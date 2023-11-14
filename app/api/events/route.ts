import { db } from "@/libs/db";
import { z } from "zod";

export async function GET(req: Request) {
  const url = new URL(req.url);

  try {
    const { limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
      });

    const events = await db.event.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
      orderBy: {
        ticketsBought: "desc",
      },
    });

    return new Response(JSON.stringify(events));
  } catch (error) {
    return new Response("Could not fetch events", { status: 500 });
  }
}
