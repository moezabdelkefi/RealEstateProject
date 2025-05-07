import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const GoogleTranslate = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    // Ensure styles are added only in the browser
    const styles = `
      .custom-google-translate {
          display: inline-block;
          position: relative;
      }

      .custom-translate-button {
          background-color: #c69832;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .custom-translate-button:hover {
          background-color: #b5862c;
      }

      .arrow {
          margin-left: 10px;
          display: flex;
          align-items: center;
      }

      .custom-translate-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          z-index: 1;
          width: 100%; /* Match the width of the button */
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .custom-translate-dropdown button {
          background-color: white;
          color: black;
          border: none;
          padding: 10px 20px;
          text-align: left;
          width: 100%;
          cursor: pointer;
      }

      .custom-translate-dropdown button:hover {
          background-color: #ddd;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      // Cleanup styles when the component unmounts
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change language using i18next
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="custom-google-translate" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="custom-translate-button">
        {t("select_language")}{" "}
        <span className="arrow">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
          </svg>
        </span>
      </button>
      {dropdownOpen && (
        <div className="custom-translate-dropdown">
          <button onClick={() => handleLanguageChange("en")}>
           English
          </button>
          <button onClick={() => handleLanguageChange("ar")}>
            Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;