import styles from "./statscard.module.scss";
import { statsCardInterface } from "../../types/statsCardInterface";

const StatsCard = ({ title, value, icon }: statsCardInterface) => {
  return (
    <div className={styles["card-container"]}>
      <img src={icon} alt={title} />
      <span>{title}</span>
      <h3>{value.toLocaleString()}</h3>
    </div>
  );
};

export default StatsCard;
