"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Layout from "@/layouts/Dashboard/DashboardLayout";


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
      <div>
        <Image
          src="/images/lendsqr-logo.svg"
          alt="Lendsqr logo"
          width={150}
          height={40}
          priority
        />
      </div>
    </Layout>
  );
}
