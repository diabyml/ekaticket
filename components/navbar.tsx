"use client";

import { Button } from "@nextui-org/button";
import {
  Navbar as NexUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitcher";
import LoginAvatar from "./LoginAvatar";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <NexUiNavbar isBordered>
      <NavbarBrand className="cursor-pointer">
        <Link href={"/"} className="flex">
          <Image src={"/logo.png"} alt="Logo image" width={30} height={40} />
          <div className="ml-1 flex flex-col leading-none logoText">
            <p className="font-bold text-inherit tracking-wider">e-KaTicket</p>
            <p className="text-xs text-foreground-500 tracking-tighter">
              Une vision des solutions
            </p>
          </div>
        </Link>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem></NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        {/* signed out content */}
        <SignedOut>
          <NavbarItem className="hidden lg:flex">
            <Link href="/sign-in">Connexion</Link>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Créer un compte
            </Button>
          </NavbarItem>
          <NavbarItem className="md:hidden">
            <LoginAvatar />
          </NavbarItem>
        </SignedOut>
        {/* signed in content */}
        <SignedIn>
          <NavbarItem>
            <UserButton afterSignOutUrl="/" />
          </NavbarItem>
        </SignedIn>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </NexUiNavbar>
  );
}
