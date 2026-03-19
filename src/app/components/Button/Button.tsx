import { ButtonInterface } from "@/app/lib/types";
import styles from "./Button.module.scss";

const Button = ({ children, variant, className = '', ...props }: ButtonInterface) => {
  return (
    <button 
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
