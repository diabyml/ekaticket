"use client";
import React, { useEffect, useState } from "react";
import { useOrganizationList } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import MainContainer from "@/components/containers/MainContainer";
import CreateEventForm from "./components/CreateEventForm";
import { Heading } from "@/components/ui/heading";

function Page() {
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list
      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "admin"
      );

      // If the user is not an admin, redirect to the homepage
      if (!adminOrganization || adminOrganization.membership.role !== "admin") {
        router.push("/"); // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for the organization list; render the admin page directly
        setShowLoader(false);
      }
    }
  }, [isLoaded, organizationList, router]);

  if (showLoader) {
    return <>Loading...</>;
  }

  return (
    <div>
      <MainContainer>
        <div className="pt-6">
          <Heading title="The events" description="Manage events" />
          <CreateEventForm />
        </div>
      </MainContainer>
    </div>
  );
}

export default Page;
