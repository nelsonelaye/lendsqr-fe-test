import { NavBar, SideBar } from "../";
import { layoutInterface } from "../../types/dashboardInterface";
import styles from "./layout.module.scss";

const Layout = ({ children }: layoutInterface) => {
  return (
    <div>
      <NavBar />

      <div className={styles["layout-container"]}>
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
