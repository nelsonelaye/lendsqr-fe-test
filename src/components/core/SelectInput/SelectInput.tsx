import { formInputInterface } from "../../../types/formInputInterface";
import styles from "./selectInput.module.scss";

const SelectInput = ({ label, name, children }: formInputInterface) => {
  return (
    <div>
      <label htmlFor={name} className={styles["form-label"]}>
        {label}
      </label>
      <select className={styles["select-input"]}>
        <option disabled selected>
          Select
        </option>
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
