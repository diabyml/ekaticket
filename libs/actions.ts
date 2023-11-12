"use server";

import { EventSchema } from "./schemas";

const CreateEventSchema = EventSchema.omit({
  id: true,
  isFree: true,
  price: true,
  imageUrl: true,
});

export async function CreateEvent(formData: FormData) {
   const validatedFields = CreateEventSchema.safeParse({
     title: formData.get("title"),
     location: formData.get("location"),
     dateTime: formData.get("dateTime"),
     ticketLimit: formData.get("ticketLimit"),
     description: formData.get("description"),
   });
  
  

}
