import styles from "./StatsCard.module.scss";
import { StatsCardInterface } from "@/lib/types";

const StatsCard = ({ title, value, icon }: StatsCardInterface) => {
  return (
    <div className={styles["card-container"]}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{value.toLocaleString()}</p>
    </div>
  );
};

export default StatsCard;
