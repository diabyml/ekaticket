"use client";

import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import React from "react";
import { dark } from "@clerk/themes";

function Page() {
  const { theme } = useTheme();
  return (
    <div className="pt-6 mx-auto flex justify-center">
      <UserProfile
        appearance={{ baseTheme: theme == "dark" ? dark : undefined }}
      />
    </div>
  );
}

export default Page;
