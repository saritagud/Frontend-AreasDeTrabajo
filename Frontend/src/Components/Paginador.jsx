import React from 'react';

const Paginador = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
      <button
        className="px-2 py-1 rounded-md mr-2 bg-blue-500 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-2 py-1 rounded-md mx-1 ${
            i + 1 === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-2 py-1 rounded-md ml-2 bg-blue-500 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginador;
