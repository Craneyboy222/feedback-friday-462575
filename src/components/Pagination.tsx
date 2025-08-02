import React from 'react';
import { usePagination, DOTS } from '../hooks/usePagination';
import classNames from 'classnames';

interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className="flex list-style-none"
      aria-label="Pagination Navigation"
    >
      <li
        className={classNames('page-item', {
          disabled: currentPage === 1
        })}
        aria-disabled={currentPage === 1}
      >
        <button
          className="page-link"
          onClick={onPrevious}
          aria-label="Previous Page"
        >
          &laquo;
        </button>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index} className="dots">&#8230;</li>;
        }

        return (
          <li
            key={index}
            className={classNames('page-item', {
              active: pageNumber === currentPage
            })}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li
        className={classNames('page-item', {
          disabled: currentPage === lastPage
        })}
        aria-disabled={currentPage === lastPage}
      >
        <button
          className="page-link"
          onClick={onNext}
          aria-label="Next Page"
        >
          &raquo;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
