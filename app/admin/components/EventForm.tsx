"use client";

import ImageUpload from "@/components/UploadImage";
import { CreateEvent } from "@/libs/actions";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";
import { useFormState } from "react-dom";

function EventForm() {
  const [imageUrl, setImageUrl] = useState("");
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(CreateEvent, initialState);

  // useEffect(() => {
  //   console.log(state.errors);
  // }, [state]);

  return (
    <>
      <div className="pt-4">
        <form action={dispatch}>
          <div className="mb-6">
            <ImageUpload
              value={imageUrl ? [imageUrl] : []}
              //   disabled={loading}
              onChange={(url) => setImageUrl(url)}
              onRemove={() => setImageUrl("")}
            />
            {/* F31260 */}
            {state.errors?.imageUrl && (
              <div className="text-[#F31260] p-1 text-xs">
                Image non ajoutée
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              className="hidden"
              name="imageUrl"
              id="imageUrl"
              value={imageUrl}
            />
            <Input
              name="title"
              id="title"
              size="sm"
              variant="bordered"
              color="secondary"
              type="text"
              label="Titre"
              errorMessage={
                state.errors?.title && (
                  <>
                    {state.errors.title.map((err) => (
                      <span key={err}> {err} </span>
                    ))}
                  </>
                )
              }
            />
            <Input
              name="location"
              id="location"
              size="sm"
              variant="bordered"
              color="secondary"
              type="text"
              label="Lieu"
              errorMessage={
                state.errors?.location && (
                  <>
                    {state.errors.location.map((err) => (
                      <span key={err}> {err} </span>
                    ))}
                  </>
                )
              }
            />
            <Input
              name="dateTime"
              id="dateTime"
              size="sm"
              variant="bordered"
              color="secondary"
              type="text"
              label="Date et Heure"
              errorMessage={
                state.errors?.dateTime && (
                  <>
                    {state.errors.dateTime.map((err) => (
                      <span key={err}> {err} </span>
                    ))}
                  </>
                )
              }
            />

            <Input
              name="ticketLimit"
              id="ticketLimit"
              size="sm"
              variant="bordered"
              color="secondary"
              type="number"
              label="Limit ticket"
              defaultValue="0"
              errorMessage={
                state.errors?.ticketLimit && (
                  <>
                    {state.errors.ticketLimit.map((err) => (
                      <span key={err}> {err} </span>
                    ))}
                  </>
                )
              }
            />
            <Input
              name="price"
              id="price"
              size="sm"
              variant="bordered"
              color="secondary"
              type="number"
              label="Prix"
              defaultValue="0"
              description="si l'événement est gratuit, fixez le prix à 0"
              errorMessage={
                state.errors?.price && (
                  <>
                    {state.errors.price.map((err) => (
                      <span key={err}> {err} </span>
                    ))}
                  </>
                )
              }
            />
          </div>
          <div className="mt-6">
            <Textarea
              name="description"
              id="description"
              label="Description"
              placeholder="Entrez votre description"
              color="secondary"
              className=""
              errorMessage={
                state.errors?.description && (
                  <>
                    {state.errors.description.map((err) => (
                      <p key={err}> {err} </p>
                    ))}
                  </>
                )
              }
            />
          </div>
          {state.message && (
            <div className="text-[#F31260] pt-4 text-xs">{state.message}</div>
          )}
          <div className="mt-6 flex md:justify-end">
            <Button type="submit" color="primary">
              Ajouter événement
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EventForm;
