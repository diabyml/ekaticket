import * as zod from "zod";

export const EventSchema = zod.object({
  id: zod.string(),
  imageUrl: zod.string(),
  title: zod.string(),
  location: zod.string(),
  dateTime: zod.string(),
  ticketLimit: zod.coerce.number(),
  price: zod.number(),
  description: zod.string(),
  isFree: zod.string(),
});
