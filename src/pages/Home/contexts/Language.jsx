import  { createContext, useContext, useState } from "react";
import { translations } from "../lang/lang";
const LanguageContext = createContext();



export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("uzb");

  const toggleLanguage = (lang) => {
    setLanguage((prevLanguage) => (prevLanguage === "uzb" ? "rus" : "uzb"));
  };

  const value = {
    language,
    translations: translations[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
