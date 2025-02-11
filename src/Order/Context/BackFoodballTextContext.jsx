import { createContext, useContext, useState } from "react";

export let BackFoodballTextContext = createContext(null);

export let BackFoodballTextProvider = ({ children }) => {
  const [numberInput, setNumberInput] = useState(7);
  const [change_Name, set_ChangeName] = useState("MR.NAME");



  return (
    <BackFoodballTextContext.Provider
      value={{
        set_ChangeName,
        setNumberInput,
        numberInput,
        change_Name,
      }}
    >
      {children}
    </BackFoodballTextContext.Provider>
  );
};
