"use client";
import styles from "./SideBar.module.scss";
import SideBarItem from "../SideBarItem/SideBarItem";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import {
  businessNavigations,
  customerNavigations,
  settingsNavigations,
} from "./utils/contants";

const SideBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <nav className={styles["sidebar-container"]}>
      <SideBarItem
        imageSrc="/svgs/briefcase.svg"
        title=" Switch Organisation"
        suffixIcon={<FiChevronDown fontSize={18} />}
      />

      <div style={{ margin: "30px 0" }}>
        <SideBarItem imageSrc="/svgs/home.svg" title="Dashboard" link="/" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>Customers</h3>
        {customerNavigations?.map(({ title, imageSrc, link }) => (
          <SideBarItem
            imageSrc={imageSrc}
            title={title}
            link={link}
            key={title}
          />
        ))}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>businesses</h3>
        {businessNavigations?.map(({ title, imageSrc, link }) => (
          <SideBarItem
            imageSrc={imageSrc}
            title={title}
            link={link}
            key={title}
          />
        ))}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>settings</h3>
        {settingsNavigations?.map(({ title, imageSrc, link }) => (
          <SideBarItem
            imageSrc={imageSrc}
            title={title}
            link={link}
            key={title}
          />
        ))}
      </div>

      <div className={styles["logout-section"]}>
        <SideBarItem
          imageSrc="/svgs/sign-out.svg"
          title="Logout"
          onClickAction={handleLogout}
        />
        <span className={styles["app-version"]}>v1.2.0</span>
      </div>
    </nav>
  );
};

export default SideBar;
