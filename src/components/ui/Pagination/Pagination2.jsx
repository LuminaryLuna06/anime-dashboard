import React from "react";
import { usePagination, DOTS } from "./usePagination";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Pagination2 = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 0,
    currentPage,
    pageSize,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex items-center justify-center gap-5 md:gap-10 my-5 px-5">
      {/* Left navigation arrow */}
      {currentPage !== 1 && (
        <li
          onClick={onPrevious}
          className="rounded md:p-3 p-2 text-sm md:text-md hover:bg-blossoms-100 hover:text-blossoms-300 bg-gray-800  font-semibold flex items-center justify-center cursor-pointer transition-all"
        >
          <ArrowBackIosOutlinedIcon /> Previous
        </li>
      )}
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            onClick={() => onPageChange(pageNumber)}
            className={
              pageNumber === currentPage
                ? "bg-blossoms-200 font-semibold rounded-full px-2"
                : "cursor-pointer text-sm md:text-md"
            }
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      {currentPage !== lastPage && (
        <li
          onClick={onNext}
          className="rounded md:p-3 p-2 text-sm md:text-md hover:bg-blossoms-100 hover:text-blossoms-300 bg-gray-800  font-semibold flex items-center justify-center cursor-pointer transition-all"
        >
          Next <ArrowForwardIosOutlinedIcon />
        </li>
      )}
    </ul>
  );
};

export default Pagination2;
