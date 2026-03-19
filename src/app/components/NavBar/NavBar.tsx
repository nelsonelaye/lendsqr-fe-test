import styles from "./NavBar.module.scss";
import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";

const NavBar = () => {
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
        <span className={styles["docs"]}>Docs</span>
        <AiOutlineBell className={styles["bell"]} />
        <Image src="/images/adedeji.png" alt="user" className={styles["profile-photo"]} width={48} height={60} />
        <span className={styles["profile-name"]}>Adedeji</span>
        <AiFillCaretDown style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default NavBar;
