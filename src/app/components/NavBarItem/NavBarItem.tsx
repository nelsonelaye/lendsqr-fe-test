"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBarItem.module.scss";
import { NaviagtionInterface } from "@/app/lib/types";
import Image from "next/image";
import { useMemo } from "react";

const NavBarItem = ({ imageSrc, title, link, suffixIcon }: NaviagtionInterface) => {
  const pathname = usePathname();
  const isActive = link ? pathname === link : false;

    const activeStyle = useMemo(() => {
      return isActive
    ? { backgroundColor: "#39cdcc0f", borderLeft: "3px solid #39CDCC" }
    : {};
  }, [isActive])

  return (
    <>
      {link ? (
        <div>
          <Link href={link} className={styles["nav-link"]} style={activeStyle}>
            <Image src={imageSrc} alt={title} width={16} height={16} />
            <span>{title}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
          </Link>
        </div>
      ) : (
        <div className={styles["nav-link"]}>
          <Image src={imageSrc} alt={title} width={16} height={16} />
          <span>{title}</span>
          {suffixIcon && <span>{suffixIcon}</span>}
        </div>
      )}
    </>
  );
};

export default NavBarItem;
