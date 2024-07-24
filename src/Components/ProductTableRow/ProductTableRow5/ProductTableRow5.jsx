import React from 'react'

const ProductTableRow5 = () => {
  const handleCheckboxChange = () => {
    // Handle checkbox change
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
  };

  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            onChange={handleCheckboxChange}
            onClick={handleCheckboxClick}
            className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex items-center mr-3">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
            alt="iMac Front Image"
            className="h-8 w-auto mr-3"
          />
          Xbox Series S
        </div>
      </th>
      <td className="px-4 py-3">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          Console
        </span>
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          <div className="h-4 w-4 rounded-full inline-block mr-2 bg-yellow-300"></div>
          450
        </div>
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        1.61
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        0.30
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-500 dark:text-gray-400 ml-1">5.0</span>
        </div>
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-400 mr-2"
            aria-hidden="true"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          99
        </div>
      </td>
      <td className="px-4 py-3">$345K</td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            data-drawer-target="drawer-update-product"
            data-drawer-show="drawer-update-product"
            aria-controls="drawer-update-product"
            className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 -ml-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            Edit
          </button>
          <button
            type="button"
            data-drawer-target="drawer-read-product-advanced"
            data-drawer-show="drawer-read-product-advanced"
            aria-controls="drawer-read-product-advanced"
            className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2 -ml-0.5"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.2.617.2 1.308 0 1.926-1.49 4.467-5.705 7.59-10.675 7.59-4.97 0-9.185-3.123-10.675-7.59a3.181 3.181 0 010-1.926zM12 13.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-3.25 2.5a.75.75 0 00-.75.75c0 .571.186 1.134.53 1.596.34.456.824.834 1.387 1.108 1.126.548 2.64.796 4.083.796s2.957-.248 4.083-.796c.563-.274 1.047-.652 1.387-1.108.344-.462.53-1.025.53-1.596a.75.75 0 00-.75-.75H8.75z"
              />
            </svg>
            View
          </button>
          <button
            type="button"
            data-modal-target="delete-product-modal"
            data-modal-show="delete-product-modal"
            className="py-2 px-3 flex items-center text-sm font-medium text-center text-red-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 -ml-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6 4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm2.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};


export default ProductTableRow5
