import logo from "../../assets/svg/lendsqr-logo.svg";
import photo from "../../assets/svg/photo.svg";
import styles from "./navbar.module.scss";
import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <img src={logo} alt="Lensqr" style={{ width: "100px" }} />

      <div className={styles["search-bar"]}>
        <input type="search" placeholder="Search for anything" />
        <div className={styles["suffixIcon"]}>
          <HiOutlineSearch />
        </div>
      </div>

      <div className={styles["extras"]}>
        <span className={styles["docs"]}>Docs</span>
        <AiOutlineBell className={styles["bell"]} />
        <img src={photo} alt="user" className={styles["profile-photo"]} />
        <span className={styles["profile-name"]}>Adedeji</span>
        <AiFillCaretDown style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default NavBar;
