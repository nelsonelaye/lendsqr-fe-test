"use client";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    const name = auth.email
      ?.split("@")[0]
      .replace(/[._+-]/g, " ") ?? "User";
    
    setDisplayName(name);
  }, []);

  return (
    <div className={styles["navbar-container"]}>
      <Image src="/images/lendsqr-logo.svg" alt="Lensqr" width={144} height={30} />

      <div className={styles["search-bar"]}>
        <input type="search" placeholder="Search for anything" />
        <div className={styles["suffixIcon"]}>
          <HiOutlineSearch />
        </div>
      </div>

      <div className={styles["extras"]}>
        <Link href="https://docs.lendsqr.com/" target="_blank" className={styles["docs"]}>Docs</Link>
        <Image src="/svgs/notification.svg" alt="notification" className={styles["bell"]} width={26} height={26} />
        <Image src="/images/adedeji.png" alt="user" className={styles["profile-photo"]} width={48} height={60} />
        <div>
          <span className={styles["profile-name"]}>
            {displayName ?? <span style={{ visibility: "hidden" }}>——</span>}
          </span>
          <AiFillCaretDown style={{ cursor: "pointer" }} size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
