import MainContainer from "@/components/containers/MainContainer";
import { Heading } from "@/components/ui/heading";
import React from "react";
import EventForm from "../../components/EventForm";

function Page() {
  return (
    <MainContainer>
      <div className="pt-6">
        <Heading
          title="Nouvel événement"
          description="création d'un nouvel événement"
        />
        <EventForm />
      </div>
    </MainContainer>
  );
}

export default Page;
