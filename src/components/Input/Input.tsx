'use client'
import { useState } from "react";
import styles from "./Input.module.scss";
import { FormInputInterface } from "@/lib/types";

const FormInput = ({
  placeholder,
  name,
  type,
  label,
  error,
  ...props
}: FormInputInterface) => {
  const [passwordType, setPasswordType] = useState("password");

  const controlPasswordView = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className={styles["form-input-wrapper"]}>
      <label htmlFor={name} className={styles["form-label"]}>
        {label}
      </label>
      <div
        className={`${styles["form-input"]} ${error && styles["form-input--error"]}`}
      >
        <input
          placeholder={placeholder}
          id={name}
          name={name}
          type={type === "password" ? passwordType : type}
          {...props}
        />
        {type === "password" && (
          <span className={styles["suffix-text"]} onClick={controlPasswordView}>
            {passwordType === "password" ? "show" : "hide"}
          </span>
        )}
      </div>
      {error && <span className={styles["error-text"]}>{error}</span>}
    </div>
  );
};

export default FormInput;
