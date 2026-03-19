"use client"
import Button from "@/app/components/Button/Button";
import FormInput from "@/app/components/Input/Input";
import styles from "@/app/styles/login.module.scss";
import Image from "next/image";


const Login = () => {
  return (
    <div className={styles["login-container"]}>
      <div className={styles["side-illustration"]}>
        <div className={styles["content-hold"]}>
          <Image src="/images/lendsqr-logo.svg" width={170} height={36} alt="lendsqr" className={styles["logo"]} />
          <Image
            src="/images/illustration.svg"
            alt="illustration"
            width={500}
            height={500}
            className={styles["illustration"]}
          />
        </div>
      </div>
      <div className={styles["side-form"]}>
        <div className={styles["content-hold"]}>
          <div style={{ marginBottom: "60px" }}>
            <h1>Welcome!</h1>
            <span>Enter details to login.</span>
          </div>

          <form
            onSubmit={() => {
            console.log("SUbmitted")
            }}
          >
            <FormInput name="email" type="email" placeholder="Email" />
            <FormInput name="password" type="password" placeholder="Password" />

            <p className={styles["forget-password"]}>Forgot PASSWORD?</p>

            <Button variant="primary" type="submit">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
