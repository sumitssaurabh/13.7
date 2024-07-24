import React from 'react'

const CategoryHeading = () => {
    return (
      <h2 id="category-heading">
        <button
          type="button"
          className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          data-accordion-target="#category-body"
          aria-expanded="true"
          aria-controls="category-body"
        >
          <span>Category</span>
          <svg
            aria-hidden="true"
            data-accordion-icon=""
            className="w-5 h-5 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </button>
      </h2>
    );
  };
  

export default CategoryHeading
