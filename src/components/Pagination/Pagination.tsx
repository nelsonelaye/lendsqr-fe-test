"use client";

import { useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions?: number[];
}

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

function getPageRange(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const visible = new Set([1, 2, 3, current - 1, current, current + 1, total - 1, total]);
  const pages = Array.from(visible)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  return pages.reduce<(number | "…")[]>((acc, p, i) => {
    if (i > 0 && p - pages[i - 1] > 1) acc.push("…");
    acc.push(p);
    return acc;
  }, []);
}


export default function Pagination({
  total,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = PAGE_SIZE_OPTIONS,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = useMemo(() => getPageRange(currentPage, totalPages), [currentPage, totalPages]);

  return (
    <div className={styles.pagination}>
      {/* Left — "Showing X out of Y" */}
      <div className={styles.tracker}>
        <span>Showing</span>
        <div className={styles.sizeSelect}>
          <select
            id="pagination-page-size"
            value={pageSize}
            onChange={(e) => {
              onPageSizeChange(Number(e.target.value));
              onPageChange(1);
            }}
            className={styles.select}
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <IoIosArrowDown className={styles.selectIcon} />
        </div>
        <span>out of {total}</span>
      </div>

      {/* Right — page numbers */}
      <nav className={styles.pages} aria-label="Pagination">
        <button
          id="pagination-prev"
          className={styles.arrow}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous page"
        >
          <IoIosArrowBack size={14} />
        </button>

        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`ellipsis-${i}`} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <button
              key={p}
              id={`pagination-page-${p}`}
              className={`${styles.page} ${p === currentPage ? styles.active : ""}`}
              onClick={() => onPageChange(p)}
              aria-label={`Page ${p}`}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          )
        )}

        <button
          id="pagination-next"
          className={styles.arrow}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
        >
          <IoIosArrowForward size={14} />
        </button>
      </nav>
    </div>
  );
}
