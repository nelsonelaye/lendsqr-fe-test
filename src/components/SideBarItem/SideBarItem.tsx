"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideBarItem.module.scss";
import { NavigationInterface } from "@/lib/types";
import Image from "next/image";

const SideBarItem = ({
  imageSrc,
  title,
  link,
  suffixIcon,
  onClickAction,
}: NavigationInterface) => {
  const pathname = usePathname();
  const isActive = link ? pathname === link : false;

  const linkClass = `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`;

  return (
    <>
      {link ? (
        <div>
          <Link href={link} className={linkClass}>
            <Image src={imageSrc} alt={title} width={16} height={16} />
            <span>{title}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
          </Link>
        </div>
      ) : (
        <div
          className={styles["nav-link"]}
          style={{ opacity: 1 }}
          onClick={onClickAction}
        >
          <Image src={imageSrc} alt={title} width={16} height={16} />
          <span>{title}</span>
          {suffixIcon && <span>{suffixIcon}</span>}
        </div>
      )}
    </>
  );
};

export default SideBarItem;
