import React, { useEffect, useState, useRef } from "react";

const GoogleTranslate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
      window.googleTranslateElementInit = googleTranslateElementInit;
    };

    addGoogleTranslateScript();
  }, []);

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

      .goog-te-banner-frame.skiptranslate {
          display: none !important;
      }

      .goog-logo-link {
          display: none !important;
      }

      .goog-te-gadget {
          color: transparent !important;
      }

      .goog-te-gadget .goog-te-combo {
          background-color: transparent !important;
          color: green !important;
          font-size: 14px;
          font-weight: 500;
          font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
          -webkit-appearance: none; /* Remove default arrow in Chrome/Safari */
          -moz-appearance: none; /* Remove default arrow in Firefox */
          appearance: none; /* Remove default arrow in other browsers */
          background-image: none; /* Remove default arrow in IE */
      }

      .VIpgJd-ZVi9od-l4eHX-hSRGPd {
          display: none;
      }
      .VIpgJd-ZVi9od-ORHb-OEVmcd  {
        display: none;
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
    const translateElement = document.querySelector(".goog-te-combo");
    if (translateElement) {
      translateElement.value = languageCode;
      translateElement.dispatchEvent(new Event("change"));
    }
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="custom-google-translate" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="custom-translate-button">
        Languages{" "}
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
          <button onClick={() => handleLanguageChange("en")}>English</button>
          <button onClick={() => handleLanguageChange("ar")}>Arabic</button>
        </div>
      )}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default GoogleTranslate;