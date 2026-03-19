import styles from "./SideBar.module.scss";
import NavBarItem from "../NavBarItem/NavBarItem";
import { FiChevronDown } from "react-icons/fi";
import {
  businessNavigations,
  customerNavigations,
  settingsNavigations,
} from "./utils/contants";

const SideBar = () => {
  return (
    <nav className={styles["sidebar-container"]}>
      <NavBarItem
        imageSrc="/svgs/briefcase.svg"
        title=" Switch Organisation"
        suffixIcon={<FiChevronDown fontSize={18} />}
      />

      <div style={{ margin: "30px 0" }}>
        <NavBarItem imageSrc="/svgs/home.svg" title="Dashboard" link="/dashboard" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>Customers</h3>
        {customerNavigations?.map(({ title, imageSrc, link }) => (
          <NavBarItem imageSrc={imageSrc} title={title} link={link} key={title} />
        ))}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>businesses</h3>
        {businessNavigations?.map(({ title, imageSrc, link }) => (
          <NavBarItem imageSrc={imageSrc} title={title} link={link} key={title} />
        ))}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>settings</h3>
        {settingsNavigations?.map(({ title, imageSrc, link }) => (
          <NavBarItem imageSrc={imageSrc} title={title} link={link} key={title} />
        ))}
      </div>

      <div className={styles["logout-section"]}>
        <NavBarItem imageSrc="/svgs/sign-out.svg" title="Logout" />
        <span className={styles["app-version"]}>v1.2.0</span>
      </div>
    </nav>
  );
};

export default SideBar;
