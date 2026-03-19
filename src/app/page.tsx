import Image from "next/image";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
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
