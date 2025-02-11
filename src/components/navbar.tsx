import React, { useContext, useState } from "react";
import { User,ShoppingBag,Moon,Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { themeVariables, useTheme } from "../Context/Theme";
import { TChildren } from "../utils/types";
import { ScrollContext } from "../pages/Home/contexts/ScrollContext";
import { useLanguage } from "../pages/Home/contexts/Language";
import { FaBars } from "react-icons/fa";
import Drawer from "./drawer";
import { NavbarItem } from "./NavbarItem";

const Navbar: React.FC<TChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const themeClass = themeVariables[theme];

  const ScrollContextApi = useContext(ScrollContext);
  if (!ScrollContextApi) throw new Error();
  const { homeScroll, aboutScroll, categoryScroll, contactScroll } = ScrollContextApi;

  const { toggleLanguage, translations, language } = useLanguage();
  let [drawer, setDrawer] = useState<boolean>(false);

  return (
    <div className={`container_screen fixed ${themeClass.card}  top-0 inset-0 z-[20] h-[8vh] flex_between shadow w-full`}>
      {/* logo  */}
      <div className="flex_center gap-5 cursor-pointer" onClick={() => navigate("/")}>
        <button
          className={`${themeClass.buttonSecondary} ${themeClass.text} ${window.location.pathname == "/" ? "hidden" : "flex_center"} rounded-full w-12 h-12`}
          onClick={() => navigate(-1)}
        >
          <BiLeftArrowAlt className="text-2xl" />
        </button>
        <div>
          <h1 className="header">MP</h1>
          <p className="text-blue-600 font-medium -mt-2">Master Print</p>
        </div>
      </div>
      <NavbarItem/>
      {/* Contack & dropdown */}
      <div
        className={`px-2  h-full ${themeClass.text}  ${window.location.pathname === '/' ? 'hidden' : 'flex'} lg:flex justify-between items-center  gap-5 text relative cursor-pointer`}
      >
        {!children && (
          <div className="flex_center gap-3">
            <User
              className={`transition ${themeClass.buttonSecondary} ${themeClass.text} p-[7px] w-10 h-10 rounded-full `}
            />
            <ShoppingBag
              className={`${themeClass.buttonSecondary} ${themeClass.text} transition w-10 p-2 h-10 py-1 rounded-full`}
            />
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${themeClass.buttonSecondary}`}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button
              onClick={() => toggleLanguage()}
              className={`p-2 rounded-full ${themeClass.buttonSecondary} h-[43px] w-[43px] transition-all`}
            >
              {language === "uzb" ? "Ru" : "Uz"}
            </button>
          </div>
        )}

        {children && (
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${themeClass.buttonSecondary}`}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        )}

        {children}
      </div>

      {/* mobile Menu */}
      <div className={` ${window.location.pathname === '/' ? 'block' : 'hidden'}  lg:hidden`}>
        <button
          onClick={() => setDrawer(true)}
          className="text-4xl cursor-pointer text-blue-700 hover:scale-[0.98] transition-all"
        >
          <FaBars />
        </button>
      </div>
      <Drawer
        getDrawer={drawer}
        themeClass={themeClass}
        setDrawer={() => setDrawer(false)}
        lang={translations}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        theme={theme}
        language={language}
        homeScroll={homeScroll}
        aboutScroll={aboutScroll}
        categoryScroll={categoryScroll}
        contactScroll={categoryScroll}
      />
    </div>
  );
};

export default Navbar;
