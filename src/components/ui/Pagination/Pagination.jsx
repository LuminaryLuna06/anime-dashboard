import React from "react";

function Pagination({ page, setPage, totalPages }) {
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  return (
    <div className="p-4 flex items-center justify-center text-gray-500 gap-5">
      <button
        disabled={page === 1}
        onClick={() => prevPage()}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed "
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              className={`px-2 rounded-sm ${
                page === pageNum ? "bg-pink-300 text-white" : ""
              }`}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </button>
          )
        )}
      </div>
      <button
        disabled={page === totalPages}
        onClick={() => nextPage()}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed "
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
