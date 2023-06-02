import styles from "./sidebar.module.scss";
import { NavItem } from "../";
import briefcase from "../../assets/svg/briefcase.svg";
import home from "../../assets/svg/home.svg";
import logout from "../../assets/svg/sign-out.svg";
import { FiChevronDown } from "react-icons/fi";
import {
  businessNavigations,
  customerNavigations,
  settingsNavigations,
} from "./utils/values";

const SideBar = () => {
  return (
    <nav className={styles["sidebar-container"]}>
      <NavItem
        imageSrc={briefcase}
        title=" Switch Organisation"
        suffixIcon={<FiChevronDown fontSize={18} />}
      />

      <div style={{ margin: "30px 0" }}>
        <NavItem imageSrc={home} title="Dashboard" link="/dashboard" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>Customers</h3>
        {customerNavigations?.map(({ title, imageSrc, link }) => (
          <NavItem imageSrc={imageSrc} title={title} link={link} />
        ))}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>businesses</h3>
        {businessNavigations?.map(({ title, imageSrc, link }) => (
          <NavItem imageSrc={imageSrc} title={title} link={link} />
        ))}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 className={styles["nav-group-title"]}>settings</h3>
        {settingsNavigations?.map(({ title, imageSrc, link }) => (
          <NavItem imageSrc={imageSrc} title={title} link={link} />
        ))}
      </div>

      <div className={styles["logout-section"]}>
        <NavItem imageSrc={logout} title="Logout" />
        <span className={styles["app-version"]}>v1.2.0</span>
      </div>
    </nav>
  );
};

export default SideBar;
