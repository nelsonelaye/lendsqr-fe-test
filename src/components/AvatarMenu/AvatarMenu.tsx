"use client";
import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RiLogoutBoxLine } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./AvatarMenu.module.scss";

export default function AvatarMenu() {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    setEmail(auth.email ?? null);
    const name = auth.email?.split("@")[0].replace(/[._+-]/g, " ") ?? "User";
    setDisplayName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className={styles["trigger"]} role="button" aria-label="Profile menu">
          <span className={styles["name"]}>
            {displayName ?? <span style={{ visibility: "hidden" }}>——</span>}
          </span>
          <Image src="/svgs/dropdown.svg" alt="" width={10} height={10} />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles["content"]} sideOffset={12} align="end">
          <p className={styles["email"]}>{email}</p>

          <DropdownMenu.Separator className={styles["separator"]} />

          <DropdownMenu.Item className={styles["item"]} onSelect={handleLogout}>
            <RiLogoutBoxLine size={15} />
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
