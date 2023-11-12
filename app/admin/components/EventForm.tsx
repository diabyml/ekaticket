"use client";

import ImageUpload from "@/components/UploadImage";
import { CreateEvent } from "@/libs/actions";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea } from "@nextui-org/input";
import { useEffect, useState } from "react";

function EventForm() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <div className="pt-4">
        <form action={CreateEvent}>
          <div className="mb-6">
            <ImageUpload
              value={imageUrl ? [imageUrl] : []}
              //   disabled={loading}
              onChange={(url) => setImageUrl(url)}
              onRemove={() => setImageUrl("")}
            />
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
            />
            <Input
              name="location"
              id="location"
              size="sm"
              variant="bordered"
              color="secondary"
              type="text"
              label="Lieu"
            />
            <Input
              name="dateTime"
              id="dateTime"
              size="sm"
              variant="bordered"
              color="secondary"
              type="text"
              label="Date et Heure"
            />

            <Input
              name="ticketLimit"
              id="ticketLimit"
              size="sm"
              variant="bordered"
              color="secondary"
              type="number"
              label="Limit ticket"
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
            />
          </div>
          {/* <div className="mt-6">
            <Checkbox
              name="isFree"
              id="isFree"
              color="secondary"
              value={"yes"}
              defaultChecked={false}
            >
              Gratuit
            </Checkbox>
          </div> */}
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
