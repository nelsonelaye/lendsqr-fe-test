"use client";
import { RiFileUnknowLine } from "react-icons/ri";
import styles from "@/styles/not-found.module.scss";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
  return (

      <div className={styles.container}>
        <RiFileUnknowLine size={120} className={styles.icon} />

        <div>
          <h1 className={styles.heading}>404</h1>
          <p className={styles.message}>
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

    
          <div>
          <Button variant="primary" onClick={() => router.back()} >Go Back</Button>
              
          </div>
     
      </div>
  );
}


export default NotFound;