import { useState } from "react";
import { formInputInterface } from "../../../types/formInputInterface";
import styles from "./formInput.module.scss";

const FormInput = ({ placeholder, name, type, label }: formInputInterface) => {
  const [passwordType, setPasswordType] = useState("password");

  const controlPasswordView = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <label htmlFor={name} className={styles["form-label"]}>
        {label}
      </label>
      <div className={styles["form-input"]}>
        <input
          placeholder={placeholder}
          id={name}
          name={name}
          type={type === "password" ? passwordType : type}
        />
        {type === "password" && (
          <span className={styles["suffix-text"]} onClick={controlPasswordView}>
            show
          </span>
        )}
      </div>
    </>
  );
};

export default FormInput;
