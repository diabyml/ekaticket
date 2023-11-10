import { Button } from "@nextui-org/button";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

function LoginAvatar() {
  return (
    <>
      <Link href={"/sign-in"} className="block">
        <Button isIconOnly aria-label="Sign in" variant="ghost" size="sm">
          <User className="w-4 h-4" />
        </Button>
      </Link>
    </>
  );
}

export default LoginAvatar;
