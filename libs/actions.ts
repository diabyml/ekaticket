"use server";

import { revalidatePath } from "next/cache";
import { EventSchema } from "./schemas";
import { redirect } from "next/navigation";
import { db } from "./db";

const CreateEventSchema = EventSchema.omit({
  id: true,
  isFree: true,
});

export type State = {
  errors?: {
    title?: string[];
    location?: string[];
    dateTime?: string[];
    ticketLimit?: string[];
    description?: string[];
    price?: string[];
    imageUrl?: string[];
  };
  message?: string | null;
};

export async function CreateEvent(prevState: State, formData: FormData) {
  const validatedFields = CreateEventSchema.safeParse({
    title: formData.get("title"),
    location: formData.get("location"),
    dateTime: formData.get("dateTime"),
    ticketLimit: formData.get("ticketLimit"),
    description: formData.get("description"),
    price: formData.get("price"),
    imageUrl: formData.get("imageUrl"),
  });

  // console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la création.",
    };
  }

  const {
    title,
    location,
    dateTime,
    ticketLimit,
    description,
    price,
    imageUrl,
  } = validatedFields.data;
  const isFree = price ? false : true;

  // insert data into database
  try {
    // create event in prisma db
    await db.event.create({
      data: {
        title,
        location,
        dateTime,
        ticketLimit: Number(ticketLimit),
        description,
        price: Number(price),
        imageUrl,
        isFree,
      },
    });
  } catch (error) {
    return {
      message:
        "Erreur de base de données : échec de la création de l'événement",
    };
  }

  // after creating event redirect user to admin home
  revalidatePath("/admin");
  redirect("/admin");
}
