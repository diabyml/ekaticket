import * as zod from "zod";

export const EventSchema = zod.object({
  id: zod.string(),
  imageUrl: zod.string().min(1),
  title: zod
    .string()
    .refine((data) => data.trim() !== "", { message: "Titre non défini" }),
  location: zod
    .string()
    .refine((data) => data.trim() !== "", { message: "Lieu non défini" }),
  dateTime: zod.string().refine((data) => data.trim() !== "", {
    message: "Date et heure non défini",
  }),
  ticketLimit: zod.string().refine((data) => data.trim() !== "", {
    message: "Nombre limit non défini, entrez zero si pas de limite!",
  }),
  price: zod.string().refine((data) => data.trim() !== "", {
    message: "Prix non défini, entrez zero si gratuit",
  }),
  description: zod.string().refine((data) => data.trim() !== "", {
    message: "Description défini",
  }),
  isFree: zod.string(),
});
