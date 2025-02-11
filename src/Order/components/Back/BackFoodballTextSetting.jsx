import { useContext, useState } from "react";
import { BackFoodballTextContext } from "../../Context/BackFoodballTextContext";
import { useTheme, themeVariables } from "../../../Context/Theme";

const BackFootballTextSetting = () => {
  const [changeName, setChangeName] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [error, setError] = useState(null);

  const {
    set_ChangeName,
    setNumberInput: setContextNumberInput,
    change_Name,
    
  } = useContext(BackFoodballTextContext);

  const { theme } = useTheme();

  // Faqat Change tugmasi bosilganda kontekstga sonni yuborish
  const handleNumberChange = () => {
    if (numberInput.length === 0) {
      setError('Raqam Yozing');
      return;
    }
  
    if (!/^\d+$/.test(numberInput)) {
      setError("Faqat Raqam Yozing");
      return;
    } else if (numberInput.length > 2) {
      setError('Faqat 2-Xonali Son bolsin');
      return;
    }
  
    setError(null); // Errorni faqat bu yerda tozalash
    setContextNumberInput(numberInput); // Context-ga yuborish
  };
  
  

  const handleChangeName = () => {
    if (!changeName.trim()) {
      setError("Iltimos Ism Kiriting!");
      return;
    }
    setError(null);
    set_ChangeName(changeName.toLocaleUpperCase());
  };

  return (
    <div className="mt-2">
    
      {/* Change Name Input */}
      <div className="mb-4">
        <div className="flex items-center border h-10 rounded-md">
          <input
          defaultValue={change_Name}
            onChange={(e) => setChangeName(e.target.value)}
            type="text"
            maxLength={15}
            className={`${themeVariables[theme].input} ${themeVariables[theme].text} w-full px-2 h-full placeholder-gray-400 outline-none rounded-l-md`}
            placeholder="Please enter Name"
          />
          <button
            onClick={handleChangeName}
            className={`${themeVariables[theme].button} h-full px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-r-md`}
          >
            Change
          </button>
        </div>
      </div>

      {/* Number Input */}
      <div className="mb-4">
        <div className="flex items-center border h-10 rounded-md">
          <input
            onChange={(e) => setNumberInput(e.target.value)}
            type="text"
            maxLength={10}
            className={`${themeVariables[theme].input} ${themeVariables[theme].text} w-full px-2 h-full placeholder-gray-400 outline-none rounded-l-md`}
            placeholder="Please enter a Number"
          />
          <button
            onClick={handleNumberChange}
            className={`${themeVariables[theme].button} h-full px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-r-md`}
          >
            Change
          </button>
        </div>
      </div>

  
    </div>
  );
};

export default BackFootballTextSetting;
