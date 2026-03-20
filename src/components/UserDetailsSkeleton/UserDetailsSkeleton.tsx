import styles from "./UserDetailsSkeleton.module.scss";

const FieldSkeleton = ({ wide = false }: { wide?: boolean }) => (
  <div className={styles.field}>
    <span className={styles.label} />
    <span className={wide ? styles["value--wide"] : styles.value} />
  </div>
);

const SectionSkeleton = ({ count, wideIndex }: { count: number; wideIndex?: number }) => (
  <div className={styles.section}>
    {Array.from({ length: count }).map((_, i) => (
      <FieldSkeleton key={i} wide={i === wideIndex} />
    ))}
  </div>
);

export default function GeneralDetailsSkeleton() {
  return (
    <>
      <p className={styles.title} />
      <SectionSkeleton count={8} />

      <p className={styles.title} />
      <SectionSkeleton count={7} wideIndex={5} />

      <p className={styles.title} />
      <SectionSkeleton count={3} />

      <p className={styles.title} />
      <SectionSkeleton count={4} />
    </>
  );
}
