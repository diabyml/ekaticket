"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

function SignupForm() {
  const { theme } = useTheme();
  return (
    <>
      <SignUp appearance={{ baseTheme: theme == "dark" ? dark : undefined }} />
    </>
  );
}

export default SignupForm;
