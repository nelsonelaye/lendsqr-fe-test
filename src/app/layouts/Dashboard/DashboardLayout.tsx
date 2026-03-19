import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { LayoutInterface } from "../../lib/types";
// import styles from "./layout.module.scss";

const Layout = ({ children }: LayoutInterface) => {
  return (
    <div>
      <NavBar />

      {/* <div className={styles["layout-container"]}> */}
      <div>
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
