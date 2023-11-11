"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

function SigninForm() {
  const { theme } = useTheme();
  return (
    <>
      <SignIn appearance={{ baseTheme: theme == "dark" ? dark : undefined }} />
    </>
  );
}

export default SigninForm;
