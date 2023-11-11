"use server";

export async function CreateEvent(formData: FormData) {
  console.log(Object.fromEntries(formData));
}
