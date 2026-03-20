"use client";

import Link from "next/link";
import Layout from "../layouts/Dashboard/DashboardLayout";
import { RiFileUnknowLine } from "react-icons/ri";
import styles from "@/styles/not-found.module.scss";
import Button from "@/components/Button/Button";

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <RiFileUnknowLine size={120} className={styles.icon} />

        <div>
          <h1 className={styles.heading}>404</h1>
          <p className={styles.message}>
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

        <Link href="/">
          <Button variant="primary">Back to Dashboard</Button>
        </Link>
      </div>
    </Layout>
  );
}
