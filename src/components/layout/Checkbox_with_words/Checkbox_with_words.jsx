import React, { useState } from "react";
import TermsAndCondition from "../Term and condition/Term_and_condition"
import "./Checkbox_with_words.css";

const Checkbox_with_words = ({ cls, text, className, onCheckboxChange, label, linkText, linkUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <div className="font-light flex items-center">
        <span>
          <input
            className="ml-1.5 text-white bg-black checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
        </span>{" "}
        <h6 className={cls}>
          {label}{" "}
        </h6>
        <a href={linkUrl} onClick={handleLinkClick} className={className}>
          {linkText}
        </a>
        <h6 className={className}>{text}</h6>
     
</div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="term  bg-white rounded-lg p-6   h-3/4 overflow-auto relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-black">
              Close
            </button>
            <TermsAndCondition/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkbox_with_words;
