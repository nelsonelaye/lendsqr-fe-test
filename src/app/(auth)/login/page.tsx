"use client"
import Button from "@/app/components/Button/Button";
import FormInput from "@/app/components/Input/Input";
import styles from "./login.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { validationSchema } from "@/app/lib/schema";
import { useMemo } from "react";

const Login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // persist auth state to localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({ email: values.email, isAuthenticated: true }),
      );
      router.push("/");
    },
  });

    const isFormValid = useMemo(() => {
      return formik.isValid && formik.dirty;
    }, [formik.isValid, formik.dirty]);

  return (
    <div className={styles["login-container"]}>
      <div className={styles["side-illustration"]}>
        <div className={styles["content-hold"]}>
          <Image
            src="/images/lendsqr-logo.svg"
            width={170}
            height={36}
            alt="lendsqr"
            className={styles["logo"]}
          />
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
        <div
          className={styles["content-hold"]}
          style={{
            maxWidth: "447px",
          }}
        >
          <div style={{ marginBottom: "60px" }}>
            <h1>Welcome!</h1>
            <span>Enter details to login.</span>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
            />

            <p className={styles["forget-password"]}>Forgot PASSWORD?</p>

            <Button variant="primary" type="submit" disabled={!isFormValid}>
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
