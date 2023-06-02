import { NavLink } from "react-router-dom";
import { naviagtionInterface } from "../../types/dashboardInterface";
import styles from "./navItem.module.scss";

const NavItem = (props: naviagtionInterface) => {
  const { imageSrc, title, link, suffixIcon } = props;
  return (
    <>
      {link ? (
        <div>
          <NavLink
            to={link}
            className={styles["nav-link"]}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#39cdcc0f",
                    borderLeft: "3px solid #39CDCC",
                    textDecoration: "none",
                  }
                : { color: "inherit", textDecoration: "none" }
            }
          >
            <img src={imageSrc} alt={title} />
            <span>{title}</span>

            {suffixIcon && <span>{suffixIcon}</span>}
          </NavLink>
        </div>
      ) : (
        <div className={styles["nav-link"]}>
          <img src={imageSrc} alt={title} />
          <span>{title}</span>

          {suffixIcon && <span>{suffixIcon}</span>}
        </div>
      )}
    </>
  );
};

export default NavItem;
