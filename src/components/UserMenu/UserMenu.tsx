"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiDotsVertical } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import styles from "./UserMenu.module.scss";

interface UserMenuProps {
  userId: string;
}

const UserMenu = ({ userId }: UserMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.trigger} aria-label="User actions">
          <HiDotsVertical size={18} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.content}
          sideOffset={4}
          align="end"
        >
          <DropdownMenu.Item className={styles.item} asChild>
            <Link href={`/users/${userId}`}>
              <BsEye size={14} />
              View Details
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item className={styles.item}>
            <Image
              src="/svgs/user-delete.svg"
              alt="user-delete"
              width={14}
              height={14}
            />
            Blacklist User
          </DropdownMenu.Item>

          <DropdownMenu.Item className={styles.item}>
            <Image
              src="/svgs/user-add.svg"
              alt="user-add"
              width={14}
              height={14}
            />
            Activate User
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserMenu;
