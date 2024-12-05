import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const LanguageHandler: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.toUpperCase();

  return (
    <div
      className={`relative rounded-3xl ${
        open ? "bg-gray-100 rounded-b-none" : "bg-white"
      } transition-all duration-300 ease-in-out`}
    >
      <button
        className="flex flex-row items-center cursor-pointer hover:bg-gray-100 px-3 rounded-3xl transition-colors duration-300 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        <span>{currentLanguage}</span>
        <IoIosArrowDown
          className={`ml-2 ${
            open ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
        />
      </button>

      <div
        className={`absolute t-0 rounded-b-3xl flex flex-col w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-3 ${
          open ? "max-h-40 bg-gray-100" : "max-h-0 bg-white"
        }`}
        style={{
          maxHeight: open ? `10rem` : "0rem",
        }}
      >
        <span
          className={`${
            currentLanguage === "EN"
              ? "font-medium text-black cursor-default"
              : "cursor-pointer text-gray-700 font-light hover:scale-105 transition-all duration-200 ease-in-out"
          }`}
          onClick={() => {
            changeLanguage("en");
            setOpen(false);
          }}
        >
          EN
        </span>
        <span
          className={`${
            currentLanguage === "RU"
              ? "font-medium text-black cursor-default"
              : "cursor-pointer text-gray-700 font-light hover:scale-105 transition-all duration-200 ease-in-out"
          } mt-0.5`}
          onClick={() => {
            changeLanguage("ru");
            setOpen(false);
          }}
        >
          RU
        </span>
      </div>
    </div>
  );
};

export default LanguageHandler;
