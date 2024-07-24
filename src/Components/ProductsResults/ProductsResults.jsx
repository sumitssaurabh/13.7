import React from 'react'

const ProductsResults = () => {
    return (
      <div className="flex-1 flex items-center space-x-2">
        <h5>
          <span className="text-gray-500">All Products:</span>
          <span className="dark:text-white">123456</span>
        </h5>
        <h5 className="text-gray-500 dark:text-gray-400 ml-1">1-100 (436)</h5>
        <button
          type="button"
          className="group"
          data-tooltip-target="results-tooltip"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">More info</span>
        </button>
        <div
          id="results-tooltip"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Showing 1-100 of 436 results
          <div className="tooltip-arrow" data-popper-arrow=""></div>
        </div>
      </div>
    );
  };

export default ProductsResults
