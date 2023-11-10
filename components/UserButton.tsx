"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useClerk, useSession } from "@clerk/nextjs";

import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { checkUserRole } from "@/libs/user";
import { useRouter } from "next/navigation";

export default function UserButton() {
  const { signOut, user } = useClerk();
  const router = useRouter();
  const { session } = useSession();
  const userRole = checkUserRole(session);
  return (
    <div className="flex items-center gap-4">
      <Dropdown
        placement="bottom-end"
        className="bg-white dark:bg-gray-700   shadow-md"
      >
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback
            src={user?.imageUrl}
            size="sm"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            {/* <p className="font-semibold">Signed in as</p> */}
            <p className="font-semibold">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </DropdownItem>
          <DropdownItem key="account">
            <Link href={"/profile"}>mon compte</Link>
          </DropdownItem>
          <DropdownItem key="my_events">
            <Link href={"/events"}>mes événements</Link>
          </DropdownItem>

          {userRole === "admin" ? (
            <DropdownItem key="admin">
              <Link href={"/admin"}>admin</Link>
            </DropdownItem>
          ) : (
            (null as any)
          )}

          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => signOut(() => router.push("/"))}
          >
            Déconnecter
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
