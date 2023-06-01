import { useState } from "react";
import { formInputInterface } from "../../../types/formInputInterface";
import styles from "./formInput.module.scss";

const FormInput = ({ placeholder, name, type }: formInputInterface) => {
  const [passwordType, setPasswordType] = useState("password");

  const controlPasswordView = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className={styles["form-input"]}>
      <input
        placeholder={placeholder}
        name={name}
        type={type === "password" ? passwordType : type}
      />
      {type === "password" && (
        <span className={styles["suffix-text"]} onClick={controlPasswordView}>
          show
        </span>
      )}
    </div>
  );
};

export default FormInput;
