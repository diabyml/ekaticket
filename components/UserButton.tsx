import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

import { useUser } from "@clerk/nextjs";

export default function UserButton() {
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
            src=""
            size="sm"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            {/* <p className="font-semibold">Signed in as</p> */}
            <p className="font-semibold">zoey@example.com </p>
          </DropdownItem>
          <DropdownItem key="account">
            <Link href={"/profile"}>mon compte</Link>
          </DropdownItem>
          <DropdownItem key="my_events">
            <Link href={"/events"}>mes événements</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Déconnecter
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
