import React from 'react'

const ShippingFilter = () => {
    const handleShippingChange = (e) => {
      console.log(e.target.checked); // Example: Logging whether the checkbox is checked
    };
  
    return (
      <>
        <h2 id="worldwide-shipping-heading">
          <button
            type="button"
            className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#worldwide-shipping-body"
            aria-expanded="true"
            aria-controls="worldwide-shipping-body"
          >
            <span>Worldwide Shipping</span>
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
        <div
          id="worldwide-shipping-body"
          className="hidden"
          aria-labelledby="worldwide-shipping-heading"
        >
          <div className="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                onChange={handleShippingChange}
                className="sr-only peer"
                name="shipping"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                North America
              </span>
            </label>
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                onChange={handleShippingChange}
                className="sr-only peer"
                name="shipping"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                South America
              </span>
            </label>
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                onChange={handleShippingChange}
                className="sr-only peer"
                name="shipping"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Asia
              </span>
            </label>
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                onChange={handleShippingChange}
                className="sr-only peer"
                name="shipping"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Australia
              </span>
            </label>
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                onChange={handleShippingChange}
                className="sr-only peer"
                name="shipping"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Europe
              </span>
            </label>
          </div>
        </div>
      </>
    );
  };
  

export default ShippingFilter
