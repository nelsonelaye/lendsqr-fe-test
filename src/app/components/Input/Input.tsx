'use client'
import { useState } from "react";
import styles from "./Input.module.scss";
import { FormInputInterface } from "@/app/lib/types";

const FormInput = ({ placeholder, name, type, label }: FormInputInterface) => {
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
