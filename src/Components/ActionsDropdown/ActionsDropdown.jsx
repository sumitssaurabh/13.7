import { useEffect, useRef, useState } from "react";

const ActionsDropdown = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        console.log("actionbtn");
      };

      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownVisible(false);
        }
      };

      useEffect(() => {
        if (isDropdownVisible) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isDropdownVisible]);
    
    

    const handleMassEdit = () => {
      // Handle mass edit action
      console.log("massbtn");
    };
  
    const handleDeleteAll = () => {
      // Handle delete all action
      console.log("deleteall");
    };
  
    return (
      <div className="relative inline-block text-left"ref={dropdownRef}>
        <button
          id="actionsDropdownButton"
          data-dropdown-toggle="actionsDropdown"
            className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
          onClick={toggleDropdown}
        >
          Actions
          <svg
            className="-mr-1 ml-1.5 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </button>
  
       
      {isDropdownVisible && (
        <div
          id="actionsDropdown"
          className="absolute right-0 z-10 w-44 mt-2 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="actionsDropdownButton"
          >
            <li>
              <button
                onClick={handleMassEdit}
                 className="block py-2 px-4 w-44 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Mass Edit
              </button>
            </li>
          </ul>
          <div className="py-1">
            <button
              onClick={handleDeleteAll}
              className="block py-2 px-4 text-sm w-44 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Delete all
            </button>
          </div>
        </div>
         )}
      </div>
    );
  };
export default ActionsDropdown;
