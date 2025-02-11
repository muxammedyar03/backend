import { motion, AnimatePresence } from "framer-motion";
import { Moon, ShoppingBag, Sun, User } from "lucide-react";
import { useEffect } from "react";
import { BiCategory, BiLeftArrowAlt } from "react-icons/bi";
import { IoMdClose, IoMdInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { FaTelegram, FaInstagram } from "react-icons/fa"; // For Telegram and Instagram icons

const Drawer = ({
  getDrawer,
  themeClass,
  setDrawer,
  lang,
  toggleLanguage,
  toggleTheme,
  theme,
  language,
  homeScroll,
  aboutScroll,
  categoryScroll,
  contactScroll,
}) => {
  useEffect(() => {
    getDrawer
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [getDrawer]);

  // Animatsiya konfiguratsiyasi
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <AnimatePresence>
      {getDrawer && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setDrawer(false)} // Overlay bosilganda yopiladi
          />

          {/* Drawer */}
          <motion.div
            className={`${themeClass.card} fixed rounded-l-2xl  top-0 right-0 h-screen w-72 md:w-80  shadow-xl z-50 flex flex-col`}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Drawer header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-xl font-bold text-blue-700">MP</h1>
                  <p className="text-blue-600 text-sm font-medium -mt-1">
                    Master Print
                  </p>
                </div>
              </div>
              <button
                className="text-2xl font-bold text-gray-600"
                onClick={() => setDrawer(false)} // `X` tugmasi bosilganda yopiladi
              >
                <IoMdClose className="text-blue-500 text-3xl" />
              </button>
            </div>

            <div className="w-full border-b py-4 pl-4">
              <div className="flex items-center gap-3">
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
            </div>

            {/* Drawer content */}
            <ul className="list-none p-4 space-y-2">
              <li
                className={`py-2 ${themeClass.text} px-4 border-b last:border-none cursor-pointer hover:text-blue-600 transition`}
                onClick={() => {
                  setDrawer(false);
                  homeScroll();
                }}
              >
                <IoHomeOutline className="inline-block" /> {lang.navbar.home}
              </li>

              <li
                className={`py-2 ${themeClass.text} px-4 border-b last:border-none cursor-pointer hover:text-blue-600 transition`}
                onClick={() => {
                  setDrawer(false);
                  aboutScroll();
                }}
              >
                <IoMdInformationCircleOutline className="inline-block" />{" "}
                {lang.navbar.about}
              </li>

              <li
                className={`py-2 ${themeClass.text} px-4 border-b last:border-none cursor-pointer hover:text-blue-600 transition`}
                onClick={() => {
                  setDrawer(false);
                  categoryScroll();
                }}
              >
                <BiCategory className="inline-block" /> {lang.navbar.category}
              </li>

              <li
                className={`py-2 ${themeClass.text} px-4 border-b last:border-none cursor-pointer hover:text-blue-600 transition`}
                onClick={() => {
                  setDrawer(false);
                  contactScroll();
                }}
              >
                <MdOutlinePhone className="inline-block" />{" "}
                {lang.navbar.contact}
              </li>
            </ul>

            {/* Contact Information */}
            <div className="mt-auto p-4 border-t">
              <h2 className="text-lg font-bold text-blue-700">{lang.navbar.contact}</h2>
              <ul className="space-y-3 mt-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <MdOutlinePhone className="text-blue-500" /> +998 90 456 7898
                </li>
                <li className="flex items-center gap-2">
                  <FaTelegram className="text-blue-500" /> @masterPrint
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram className="text-red-500" /> @masterMrint_pro
                </li>
                <li className="flex items-center gap-2">
                  <BiLeftArrowAlt className="text-blue-500" /> New York, USA
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
