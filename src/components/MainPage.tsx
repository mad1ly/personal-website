import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageHandler from "./LanguageHandler.tsx";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const focus = (id: string): void => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.log("Target not found");
  }
};

export default function MainPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const lang = searchParam.get("lang");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return (
    <div className="scroll-smooth relative">
      {/* HEADER */}
      <header className="flex flex-row py-10 px-8 md:py-12 md:px-60 font-light justify-between items-center">
        <span className="text-2xl md:text-4xl ">Madi Aliyev</span>
        <div className="text-2xl hidden md:flex flex-row space-x-8">
          <a
            onClick={() => {
              focus("about");
            }}
            className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
          >
            {t("about")}
          </a>
          <a
            onClick={() => {
              focus("experience");
            }}
            className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
          >
            {t("experience")}
          </a>
          <a
            onClick={() => {
              focus("projects");
            }}
            className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
          >
            {t("projects")}
          </a>
          <a
            onClick={() => {
              focus("contacts");
            }}
            className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
          >
            {t("contacts")}
          </a>
          <div className="pl-5">
            <LanguageHandler />
            {open ? (
              <IoCloseOutline
                className="md:hidden text-4xl"
                onClick={() => setOpen(false)}
              />
            ) : (
              <FiMenu
                className="md:hidden text-4xl"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
        </div>
        {open ? (
          <IoCloseOutline
            className="md:hidden text-4xl"
            onClick={() => setOpen(false)}
          />
        ) : (
          <FiMenu
            className="md:hidden text-4xl"
            onClick={() => setOpen(true)}
          />
        )}
      </header>
      <div className="">
        {open && (
          <div className="absolute top-22 right-0 w-full h-full bg-white overflow-hidden">
            <div className="text-2xl flex flex-col p-10 space-y-5">
              <span
                onClick={() => {
                  setOpen(false);
                  focus("about");
                }}
                className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
              >
                {t("about")}
              </span>
              <span
                onClick={() => {
                  setOpen(false);
                  focus("experience");
                }}
                className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
              >
                {t("experience")}
              </span>
              <span
                onClick={() => {
                  setOpen(false);
                  focus("projects");
                }}
                className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
              >
                {t("projects")}
              </span>
              <span
                onClick={() => {
                  setOpen(false);
                  focus("contacts");
                }}
                className="hover:text-slate-600 transition-all duration-200 ease-in-out cursor-pointer"
              >
                {t("contacts")}
              </span>
              <div className="flex w-full justify-between pt-10">
                <span className="mr-2">{t("language")}</span>
                <div className="w-20">
                  <LanguageHandler />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MAIN BODY SECTION */}
      <div className="mb-20">
        {/* WELCOME SECTION */}
        <div className="md:px-[23rem] md:mt-14 flex flex-col md:flex-row items-center ">
          <div className="rounded-full w-72 h-72 md:w-96 md:h-96">
            <img
              src="images/me.JPG"
              alt=""
              className="bg-gray-700 w-full h-full rounded-full object-cover object-bottom"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-0 md:ml-20">
            <span className="text-xl text-slate-600 font-semibold">
              {t("hello")}
            </span>
            <span className="text-6xl font-semibold my-4">{t("madi")}</span>
            <span className="text-2xl text-slate-600 font-semibold">
              Fullstack Developer
            </span>
            <div className="flex flex-row space-x-4 mt-6">
              <a
                href="/files/Madi_Aliyev_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border-2 border-stone-800 rounded-3xl p-3 font-semibold w-36 hover:bg-stone-800 hover:text-white transition-colors duration-300 ease-in-out"
              >
                {t("my-cv")}
              </a>
              <a
                onClick={() => {
                  focus("contacts");
                }}
                className="text-center cursor-pointer border-2 bg-stone-800 border-stone-800 rounded-3xl p-3 font-semibold w-36 hover:bg-black text-white transition-colors duration-300 ease-in-out"
              >
                {t("contacts")}
              </a>
            </div>
            <a
              href="https://github.com/mad1ly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl mt-4" />
            </a>
          </div>
        </div>

        {/* ABOUT ME */}
        <div
          className="px-5 md:px-60 md:mt-36 flex flex-col items-center pt-10"
          id="about"
        >
          <span className="text-5xl font-semibold mb-14">{t("about")}</span>
          <div className="border border-black rounded-3xl w-full md:w-96 h-fit md:h-44 p-6 flex flex-col items-center justify-between">
            <HiAcademicCap className="w-12 h-12 rounded" />
            <span className="font-semibold text-2xl mt-1">
              {t("education")}
            </span>
            <span className="text-gray-700 font-light text-sm md:text-base mt-2 md:mt-0">
              Computer Engieneering Degree{" "}
            </span>
            <span className="text-gray-700 font-light text-sm md:text-base">
              Warsaw, Poland
            </span>
          </div>
          <p className="mt-10 text-gray-700 text-lg font-light max-w-4xl">
            {t("p-education")}
          </p>
        </div>

        {/* EXPERIENCE */}
        <div
          className="px-5 lg:px-20 xl:px-60 md:mt-36 flex flex-col items-center pt-20"
          id="experience"
        >
          <span className="text-5xl font-semibold mb-14">
            {t("experience")}
          </span>
          <div className="h-fit w-full flex flex-row flex-wrap gap-10 justify-center px-3 md:px-0">
            <div className="border border-black rounded-3xl h-fit md:h-80 w-full md:w-[28rem] py-5 px-8 flex flex-col justify-between items-center">
              <span className="text-gray-600 font-semibold text-center text-lg md:text-3xl">
                Frontend Developement
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full mt-6 md:mt-2">
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">React</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">JavaScript</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">HTML/CSS</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">TypeScript</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Bootstrap</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Tailwind</span>
                    <span>Experienced</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-black rounded-3xl h-fit md:h-80 w-full md:w-[28rem] py-5 px-8 flex flex-col justify-between items-center">
              <span className="text-gray-600 font-semibold text-center text-lg md:text-3xl">
                Backend Developement
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full mt-6 md:mt-2">
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Node.js</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Express</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">MongoDB</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">MySQL</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Next.js</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Git</span>
                    <span>Experienced</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-black rounded-3xl h-fit md:h-80 w-full md:w-[28rem] py-5 px-8 flex flex-col justify-between items-center">
              <span className="text-gray-600 font-semibold text-center text-lg md:text-3xl">
                Data
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full mt-6 md:mt-2">
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Python</span>
                    <span>Experienced</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Scikit-learn</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Tensorflow</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Pandas</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Numpy</span>
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosCheckmarkCircle className="w-8 h-8 mr-4" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Jupyter</span>
                    <span>Experienced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div
          className="px-5 lg:px-20 xl:px-60 md:mt-36 flex flex-col items-center pt-20 space-y-12"
          id="projects"
        >
          <span className="text-5xl font-semibold">{t("projects")}</span>
          {/* project 1 */}
          <div className="w-full h-fit md:h-80 border border-black rounded-3xl flex flex-col md:flex-row p-5">
            <div className="w-full h-52 md:h-full md:w-80 mb-4 md:mb-0 rounded-3xl">
              <img
                src="/images/unistudy_main.png"
                alt="Logo of unistudy.agency"
                className="object-contain h-full w-full overflow-hidden rounded-3xl p-1 md:p-6"
              />
            </div>
            <div className="flex flex-col w-full justify-between md:ml-4">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-semibold w-full flex justify-center">
                  unistudy.agency
                </span>
                <span className="text-base md:text-xl w-full mt-2">
                  {t("p-projects-1")}
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full h-fit md:min-h-16 mt-4 md:mt-2">
                <div className="w-full md:w-96 flex flex-wrap gap-2">
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Node.JS
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Express
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    React
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    MongoDB
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Tailwind
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    i18next
                  </span>
                </div>
                <a
                  href="https://unistudy.agency"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-2 flex items-center justify-center  bg-stone-800 border-stone-800 rounded-3xl mt-3 md:mt-0 p-3 font-semibold w-full md:w-60 hover:bg-black text-white transition-colors duration-300 ease-in-out"
                >
                  Get to Know
                </a>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="w-full h-fit md:h-80 border border-black rounded-3xl flex flex-col md:flex-row p-5">
            <div className="w-full h-52 md:h-full md:w-80 mb-4 md:mb-0 rounded-3xl">
              <img
                src="/images/unity-logo.png"
                alt="Logo of Unity Engine"
                className="object-contain h-full w-full overflow-hidden rounded-3xl p-1 md:p-6"
              />
            </div>
            <div className="flex flex-col w-full justify-between md:ml-4">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-semibold w-full flex justify-center">
                  Procedural Terran Generation System
                </span>
                <span className="text-base md:text-xl w-full mt-2">
                  {t("p-projects-2")}
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full h-fit md:min-h-16 mt-4 md:mt-2">
                <div className="w-full md:w-96 flex flex-wrap gap-2">
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Unity
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    C#
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Procedural Generation
                  </span>
                </div>
                <a
                  href="https://github.com/mad1ly/Unity-Procedural-Terrain-Generation"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-2 flex items-center justify-center  bg-stone-800 border-stone-800 rounded-3xl mt-3 md:mt-0 p-3 font-semibold w-full md:w-60 hover:bg-black text-white transition-colors duration-300 ease-in-out"
                >
                  Get to Know
                </a>
              </div>
            </div>
          </div>
          {/* project 3 */}
          <div className="w-full h-fit md:h-80 border border-black rounded-3xl flex flex-col md:flex-row p-5">
            <div className="w-full h-52 md:h-full md:w-80 mb-4 md:mb-0 rounded-3xl">
              <img
                src="/images/mnist.png"
                alt="Example of MNIST dataset"
                className="object-contain h-full w-full overflow-hidden rounded-3xl p-1 md:p-2"
              />
            </div>
            <div className="flex flex-col w-full justify-between md:ml-4">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-semibold w-full flex justify-center">
                  MNIST dataset ML Model
                </span>
                <span className="text-base md:text-xl w-full mt-2">
                  {t("p-projects-3")}
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full h-fit md:min-h-16 mt-4 md:mt-2">
                <div className="w-full md:w-96 flex flex-wrap gap-2">
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Python
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Pandas
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Numpy
                  </span>
                  <span className="py-0.5 px-3 bg-gray-100 rounded-lg h-fit text-sm">
                    Tensorflow
                  </span>
                </div>
                <a
                  href="https://github.com/mad1ly/Working-with-MINST-dataset"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-2 flex items-center justify-center  bg-stone-800 border-stone-800 rounded-3xl mt-3 md:mt-0 p-3 font-semibold w-full md:w-60 hover:bg-black text-white transition-colors duration-300 ease-in-out"
                >
                  Get to Know
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div
          className="px-5 lg:px-20 xl:px-60 md:mt-36 flex flex-col items-center pt-20"
          id="contacts"
        >
          <div className="w-full flex flex-col items-center">
            <span className="text-gray-600 font-light text-lg">
              {t("get-in-touch")}
            </span>
            <span className="text-4xl font-semibold mt-2">{t("contacts")}</span>
            <div className="border border-black rounded-3xl px-5 py-6 flex md:space-x-5 mt-8 flex-col md:flex-row">
              <div className="flex items-center justify-center">
                <IoMdMail className="w-7 h-7 mr-2" />
                <span className="text-lg">almaddevy@gmail.com</span>
              </div>
              <a
                href="https://github.com/mad1ly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-5 md:mt-0 hover:underline"
              >
                <FaGithub className="w-7 h-7 mr-2" />
                <span className="text-lg">Github</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-5 lg:px-20 xl:px-60 md:mt-36 flex flex-col items-center mt-20">
          <div className="flex flex-row flex-wrap justify-center gap-6 text-2xl font-light">
            <a
              onClick={() => {
                focus("about");
              }}
              className="cursor-pointer hover:underline transition-all duration-200 ease-in-out"
            >
              {t("about")}
            </a>
            <a
              onClick={() => {
                focus("experience");
              }}
              className="cursor-pointer hover:underline transition-all duration-200 ease-in-out"
            >
              {t("experience")}
            </a>
            <a
              onClick={() => {
                focus("projects");
              }}
              className="cursor-pointer hover:underline transition-all duration-200 ease-in-out"
            >
              {t("projects")}
            </a>
            <a
              onClick={() => {
                focus("contacts");
              }}
              className="cursor-pointer hover:underline transition-all duration-200 ease-in-out"
            >
              {t("contacts")}
            </a>
          </div>
          <div className="flex flex-col mt-20 font-light text-center">
            <span>Copyright © 2024 Madi Aliyev.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
