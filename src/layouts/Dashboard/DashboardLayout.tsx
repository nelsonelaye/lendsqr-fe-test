"use client";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { LayoutInterface } from "../../lib/types";
import styles from "./DashboardLayout.module.scss";

const Layout = ({ children }: LayoutInterface) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <NavBar
        onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        isOpen={sidebarOpen}
      />

      <div className={styles["layout-container"]}>
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Overlay — tapping it closes the drawer */}
        {sidebarOpen && (
          <div
            className={styles["overlay"]}
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        <main className={styles["main"]}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
