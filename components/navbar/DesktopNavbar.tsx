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
import { ThemeSwitcher } from "../themeSwitcher";
import LoginAvatar from "../LoginAvatar";
import { SignedOut, useSession } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";
import UserButton from "../UserButton";
import MainContainer from "../containers/MainContainer";

export default function DesktopNavbar() {
  return (
    <div>
      <NexUiNavbar>
        <NavbarBrand className="cursor-pointer">
          <Link href={"/"} className="flex items-center">
            <Image src={"/logo.png"} alt="Logo image" width={30} height={40} />
            <div className="ml-1 flex flex-col leading-none logoText">
              <p className="font-bold text-inherit text-[12px]">e-KaTicket</p>
              <p className="text-[6px] text-foreground-500 tracking-tight">
                Une vision des solutions
              </p>
            </div>
          </Link>
        </NavbarBrand>
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
              {/* <UserButton afterSignOutUrl="/" /> */}
              <UserButton />
            </NavbarItem>
          </SignedIn>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </NexUiNavbar>
      <MainContainer>
        {/* <div className="">
          <div>
            <Link href={"/admin/events"}>
              <Button color="default" size="sm" variant="flat">
                events
              </Button>
            </Link>
          </div>
        </div> */}
      </MainContainer>
    </div>
  );
}
