import { detailInterface } from "../../types/detailInterface";
import styles from "./detail.module.scss";

const Detail = ({ title, value }: detailInterface) => {
  return (
    <div className={styles["detail-holder"]}>
      <div className={styles["detail-title"]}>{title}</div>
      <div className={styles["detail-value"]}>{value}</div>
    </div>
  );
};

export default Detail;
