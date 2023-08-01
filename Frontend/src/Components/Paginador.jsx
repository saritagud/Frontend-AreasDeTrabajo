import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Paginador({ currentPage, totalPages, onPageChange, route }) {
  const navigate = useNavigate();
  const maxButtons = 5;
  const halfMaxButtons = Math.floor(maxButtons / 2);

  const handleNavigate = (currentPage) => {
    navigate(`${route}/${currentPage}`);
  }

  const handlePageClick = (page) => {
    onPageChange(page);
    handleNavigate(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const updatePage = currentPage - 1;
      onPageChange(updatePage);
      handleNavigate(updatePage);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const updatePage = currentPage + 1
      onPageChange(updatePage);
      handleNavigate(updatePage);
    }
  };

  let startPage = currentPage - halfMaxButtons;
  let endPage = currentPage + halfMaxButtons;

  if (startPage < 1) {
    endPage += Math.abs(startPage) + 1;
    startPage = 1;
  }

  if (endPage > totalPages) {
    startPage -= endPage - totalPages;
    endPage = totalPages;
  }

  startPage = Math.max(startPage, 1);

  return (
    <>
      {
        totalPages > 1 &&
        <nav className='mb-9 ' aria-label="Paginator">
          <ul className="flex items-center -space-x-px h-10 text-base mb-20">
            <li>
              <button
                className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-blue-500 bg-blue-100 border border-blue-200 rounded-l-lg hover:bg-blue-200 hover:text-blue-700 dark:bg-blue-800 dark:border-blue-900 dark:text-white dark:hover:bg-blue-900`}
                onClick={handlePrevClick}
                disabled={currentPage === 1}
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
            </li>
            {[...Array(endPage - startPage + 1)].map((_, i) => (
              <li key={i}>
                <button
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${startPage + i === currentPage
                    ? 'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white'
                    : 'text-blue-500 bg-white border border-blue-200 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                  onClick={() => handlePageClick(startPage + i)}
                >
                  {startPage + i}
                </button>
              </li>
            ))}
            <li>
              <button
                className={`flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-blue-100 border border-blue-200 rounded-r-lg hover:bg-blue-200 hover:text-blue-700 dark:bg-blue-800 dark:border-blue-900 dark:text-white dark:hover:bg-blue-900`}
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      }
    </>
  );
};