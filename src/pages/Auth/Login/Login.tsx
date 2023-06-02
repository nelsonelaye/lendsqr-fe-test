import illustration from "../../../assets/svg/illustration.svg";
import logo from "../../../assets/svg/lendsqr-logo.svg";
import { Button, FormInput } from "../../../components";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["login-container"]}>
      <div className={styles["side-illustration"]}>
        <div className={styles["content-hold"]}>
          <img src={logo} alt="lendsqr" className={styles["logo"]} />
          <img
            src={illustration}
            alt="illustration"
            className={styles["illustration"]}
          />
        </div>
      </div>
      <div className={styles["side-form"]}>
        <div className={styles["content-hold"]}>
          <div style={{ marginBottom: "40px" }}>
            <h1>Welcome!</h1>
            <span>Enter details to login.</span>
          </div>

          <form
            onSubmit={() => {
              navigate("/users");
            }}
          >
            <FormInput name="email" type="email" placeholder="Email" />
            <FormInput name="password" type="password" placeholder="Password" />

            <p className={styles["forget-password"]}>Forgot PASSWORD?</p>

            <Button type="submit">Log in</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
