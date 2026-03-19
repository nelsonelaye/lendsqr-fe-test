"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../layouts/Dashboard/DashboardLayout";
import Link from "next/link";
import Button from "@/components/Button/Button";
import styles from "@/styles/home.module.scss";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // in a production app, this would be handled securely using middleware
    // but for this test, we'll use localStorage to check for authentication
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");

    if (!auth.isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Nothing to see here</h1>
        <p className={styles.message}>
          This is the dashboard home. Head over to the Users page to get started.
        </p>
        <Link href="/users">
          <Button variant="primary" className={styles.cta}>
            View Users
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
