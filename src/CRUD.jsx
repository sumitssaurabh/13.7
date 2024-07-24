import React, { useState } from "react";
import TableSettingsButton from "./Components/TableSettingsButton/TableSettingsButton";
import ProductsResults from "./Components/ProductsResults/ProductsResults";
import SearchForm from "./Components/SearchForm/SearchForm";
import AddProductButton from "./Components/AddProductButton/AddProductButton";
import FilterDropdownButton from "./Components/FilterDropdownButton/FilterDropdownButton";
import FilterHeader from "./Components/FilterHeader/FilterHeader";
import FilterSearchInput from "./Components/FilterSearchInput/FilterSearchInput";
import CategoryHeading from "./Components/CategoryHeading/CategoryHeading";
import CategoryBody from "./Components/CategoryBody/CategoryBody";
import PriceFilter from "./Components/PriceFilter/PriceFilter";
import ShippingFilter from "./Components/ShippingFilter/ShippingFilter";
import OneStarRating from "./Components/Rating/OneStarRating/OneStarRating";
import FiveStarRating from "./Components/Rating/FiveStarRating/FiveStarRating";
import ActionsDropdown from "./Components/ActionsDropdown/ActionsDropdown";
import FourStarRating from "./Components/Rating/FourStarRating/FourStarRating";
import ThreeStarRating from "./Components/Rating/ThreeStarRating/ThreeStarRating";
import TwoStarRating from "./Components/Rating/TwoStarRating/TwoStarRating";
import ProductTableRow2 from "./Components/ProductTableRow/ProductTableRow2/ProductTableRow2";
import ProductTableRow3 from "./Components/ProductTableRow/ProductTableRow3/ProductTableRow3";
import ProductTableRow4 from "./Components/ProductTableRow/ProductTableRow4/ProductTableRow4";
// import ProductTableRow5 from "./Components/ProductTableRow/ProductTableRow5/ProductTableRow5";
import ProductTableRow7 from "./Components/ProductTableRow/ProductTableRow7/ProductTableRow7";
// import ProductTableRow6 from "./Components/ProductTableRow/ProductTableRow6/ProductTableRow6";
import ProductTableRow1 from "./Components/ProductTableRow/ProductTableRow1/ProductTableRow1";
import CreateProductModal from "./Components/CreateProductModal/CreateProductModal";
import UpdateProductDrawer from "./Components/UpdateProductDrawer/UpdateProductDrawer";
import Pagination from "./Components/Pagination/Pagination";
import PaginationInfo from "./Components/PaginationInfo/PaginationInfo";
import DeleteProductModal from "./Components/DeleteProductModal/DeleteProductModal";
import TableHeaderRow from "./Components/TableHeaderRow/TableHeaderRow";
import PreviewProductDrawer from "./Components/PreviewProductDrawer/PreviewProductDrawer";

function CRUD() {
  return (
    // <!-- Start block -->
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <ProductsResults />
              <TableSettingsButton />
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
              <SearchForm />
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <AddProductButton />
                <FilterDropdownButton />
                <div
                  id="filterDropdown"
                  className="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0"
                >
                  <FilterHeader />
                  <FilterSearchInput />
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="text-black dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  >
                    {/* <!-- Category --> */}
                    <CategoryHeading />
                    <CategoryBody />
                    {/* <!-- Price --> */}
                    <PriceFilter />
                    {/* <!-- Worldwide Shipping --> */}
                    <ShippingFilter />
                    {/* <!-- Rating --> */}
                    <h2 id="rating-heading">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        data-accordion-target="#rating-body"
                        aria-expanded="true"
                        aria-controls="rating-body"
                      >
                        <span>Rating</span>
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
                      id="rating-body"
                      className="hidden"
                      aria-labelledby="rating-heading"
                    >
                      <div className="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
                        <FiveStarRating />
                        <FourStarRating />
                        <ThreeStarRating />
                        <TwoStarRating />
                        <OneStarRating />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <ActionsDropdown />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <TableHeaderRow />
                </thead>
                <tbody>
                  <ProductTableRow1 />
                  <ProductTableRow2 />
                  <ProductTableRow3 />
                  <ProductTableRow4 />
                  <ProductTableRow7 />
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <PaginationInfo />
              <Pagination />
            </nav>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      <CreateProductModal />
      {/* <!-- drawer component --> */}
      <UpdateProductDrawer />
      {/* <!-- Preview Drawer --> */}
      <PreviewProductDrawer />
      {/* <!-- Delete Modal --> */}
      <DeleteProductModal />
    </div>
  );
}

export default CRUD;
