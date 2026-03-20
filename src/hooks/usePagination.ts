import { useState } from "react";

const usePagination = (total: number, size = 10) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(total / size);

  return {
    page,
    totalPages,
    setPage,
    nextPage: () => setPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setPage((p) => Math.max(p - 1, 1)),
    hasNext: page < totalPages,
    hasPrev: page > 1,
    rangeStart: (page - 1) * size + 1,
    rangeEnd: Math.min(page * size, total),
  };
};

export default usePagination;
