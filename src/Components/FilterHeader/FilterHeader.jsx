import React from 'react'

const FilterHeader = () => {
    return (
      <div className="flex items-center justify-between pt-2">
        <h6 className="text-sm font-medium text-black dark:text-white">
          Filters
        </h6>
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Save view
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Clear all
          </a>
        </div>
      </div>
    );
  };

export default FilterHeader
