import React from 'react'


const CategoryBody = () => {
    const handleCheckboxChange = (e) => {
      console.log(e.target.value); // Example: Logging the checkbox value
    };
  
    return (
      <div
        id="category-body"
        className="hidden"
        aria-labelledby="category-heading"
      >
        <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
          <ul className="space-y-2">
            <li className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="apple"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Apple (56)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="microsoft"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="microsoft"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Microsoft (45)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="logitech"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="logitech"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Logitech (97)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="sony"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="sony"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Sony (234)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="asus"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="asus"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Asus (97)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="dell"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="dell"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Dell (56)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="msi"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="msi"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                MSI (97)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="canon"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="canon"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Canon (49)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="benq"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="benq"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                BenQ (23)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="razor"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="razor"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Razor (49)
              </label>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                View all
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
export default CategoryBody
