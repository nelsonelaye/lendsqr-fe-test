import styles from "./TableSkeleton.module.scss";

// Column widths that roughly mirror real data widths
const COL_WIDTHS = ["90px", "120px", "180px", "130px", "150px", "80px", "24px"];

export default function TableSkeleton({ rows = 10 }: { rows?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <tr key={rowIdx} className={styles.row}>
          {COL_WIDTHS.map((w, colIdx) => (
            <td key={colIdx}>
              <span className={styles.bone} style={{ width: w }} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
