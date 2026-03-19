"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fbfbfb",
      }}
    >
      <main>
        <Image
          src="/images/lendsqr-logo.svg"
          alt="Lendsqr logo"
          width={150}
          height={150}
          priority
        />
      </main>
    </div>
  );
}
