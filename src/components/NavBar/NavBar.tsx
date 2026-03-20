"use client";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import AvatarMenu from "@/components/AvatarMenu/AvatarMenu";

interface NavBarProps {
  onMenuToggle?: () => void;
  isOpen?: boolean;
}

const NavBar = ({ onMenuToggle, isOpen }: NavBarProps) => {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    const name = auth.email?.split("@")[0].replace(/[._+-]/g, " ") ?? "User";
    setDisplayName(name);
  }, []);

  return (
    <div className={styles["navbar-container"]}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <button
          className={styles["hamburger"]}
          onClick={onMenuToggle}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={20} />}
        </button>
        <Image src="/images/lendsqr-logo.svg" alt="Lensqr" className={styles.logo} width={144} height={30} />
      </div>

      <div className={styles["search-bar"]}>
        <input type="search" placeholder="Search for anything" />
        <div className={styles["suffixIcon"]}>
          <HiOutlineSearch />
        </div>
      </div>

      <div className={styles["extras"]}>
        <Link href="https://docs.lendsqr.com/" target="_blank" className={styles["docs"]}>Docs</Link>

        <button
          onClick={() => toast.info("No new notifications", { description: "Notifications are not available yet." })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
          aria-label="Notifications"
        >
          <Image src="/svgs/notification.svg" alt="notification" className={styles["bell"]} width={26} height={26} />
        </button>

        <Image src="/images/adedeji.png" alt="user" className={styles["profile-photo"]} width={48} height={60} />

        <AvatarMenu />
      </div>
    </div>
  );
};

export default NavBar;
