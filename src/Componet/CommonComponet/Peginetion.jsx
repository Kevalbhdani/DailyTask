import React from 'react'

function Peginetion({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 py-4">
        {/* First Page Button */}
        <button
          className={`px-2 py-1 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          «
        </button>

        {/* Previous Page Button */}
        <button
          className={`px-2 py-1 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 rounded ${currentPage === number
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
              }`}
          >
            {number}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          className={`px-2 py-1 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ›
        </button>

        {/* Last Page Button */}
        <button
          className={`px-2 py-1 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>

    </div>
  )
}

export default Peginetion