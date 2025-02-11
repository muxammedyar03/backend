import { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdColorize, MdDeleteOutline, MdOutlineCheck } from "react-icons/md";
import { DragTextContext } from "../Context/DragTextContext";
import { CarouselFrontBackContext } from "../Context/CarouselFrontBackContext";
import { useTheme,themeVariables } from "../../Context/Theme";

const TextSettingComponent = () => {
  const { FrontBackImage } = useContext(CarouselFrontBackContext);
  const {
    setTextsetting,
    setDragFrontText,
    setDragBackText,
    DragFrontText,
    DragBackText,
    setFontStyle,
    setFontSize,
    setFontWeight,
    fontColor,
    setFontColor,
    fontStyle,
    fontSize,
    fontWeight,
    setLetterSpacing,
    backFontStyle,
    backFontSize,
    backFontWeight,
    backFontColor,
    setBackFontStyle,
    setBackFontSize,
    setBackFontWeight,
    setBackFontColor,
    setBackLetterSpacing,
    backLetterSpacing,
    letterSpacing,
  } = useContext(DragTextContext);

  const [sendText, setSendText] = useState("");

  const colorOptions = ["#000000", "#ffffff", "#FF0000", "#0000FF", "#FFFF00"];

  const updateBoolean = (data) => {
    setTextsetting(data);
    if (FrontBackImage) {
      setDragFrontText("");
    } else {
      setDragBackText("");
    }
  };

  const updateText = (data) => {
    if (FrontBackImage) {
      setDragFrontText(data);
    } else {
      setDragBackText(data);
    }
  };

  const applyFontProperty = (property, value) => {
    if (FrontBackImage) {
      property(value);
    } else {
      if (property === setFontStyle) setBackFontStyle(value);
      if (property === setFontSize) setBackFontSize(value);
      if (property === setFontWeight) setBackFontWeight(value);
      if (property === setFontColor) setBackFontColor(value);
      if (property === setLetterSpacing) setBackLetterSpacing(value);
    }
  };

  let {theme} = useTheme()

  return (
    <div className="flex-shrink">
      <div className={` ${themeVariables[theme].card} flex_col gap-3`}>
        <div className="flex_between gap-1 h-9 rounded-md">
          <input
            type="text"
            defaultValue={FrontBackImage ? DragFrontText : DragBackText}
            maxLength={20}
            onChange={(e) => setSendText(e.target.value)}
            className={`${themeVariables[theme].input} ${themeVariables[theme].text} ${themeVariables[theme].borderSecondary} w-full px-2 rounded-md h-full outline-none focus:ring-0`}
            placeholder="Please enter text"
          />
          <button
            onClick={() => updateText(sendText)}
            className={` ${themeVariables[theme].button} h-full px-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md`}
          >
            Change
          </button>
          <button
            onClick={() => updateBoolean(false)}
            className={`${themeVariables[theme].text} ${themeVariables[theme].borderSecondary} ${themeVariables[theme].buttonSecondary} px-3 h-full border rounded-md flex items-center justify-center hover:bg-red-600 hover:text-white transition-all`}
          >
            Remove <MdDeleteOutline className="inline" />
          </button>
        </div>
        <div className="flex w-full gap-2">
          {/* Font Style */}
          <div className="flex_col gap-1 flex-1">
            <label className={`block text-gray-400 font-medium`}>Font Style</label>
            <select
              value={FrontBackImage ? fontStyle : backFontStyle}
              onChange={(e) => applyFontProperty(setFontStyle, e.target.value)}
              className={`${themeVariables[theme].input}  ${themeVariables[theme].text} w-full p-2 border  rounded-md focus:ring-2 `}
            >
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>

          {/* Font Size */}
          <div className="flex_col gap-1 flex-1">
            <label className="block text-gray-400 font-medium">Font Size</label>
            <select
              value={FrontBackImage ? fontSize : backFontSize}
              onChange={(e) => applyFontProperty(setFontSize, e.target.value)}
              className={`${themeVariables[theme].input} ${themeVariables[theme].text} w-full p-2 border  rounded-md focus:ring-2 `}
            >
              {[16, 18, 20, 24, 28, 32, 36, 44].map((size) => (
                <option key={size} value={`${size}px`}>{`${size}px`}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Font Weight */}
        <div className="">
          <label className="block text-gray-400 font-medium mb-2">Font Weight</label>
          <select
            value={FrontBackImage ? fontWeight : backFontWeight}
            onChange={(e) => applyFontProperty(setFontWeight, e.target.value)}
            className={`${themeVariables[theme].input} ${themeVariables[theme].text} w-full p-2 border  rounded-md focus:ring-2 `}
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>

        {/* Letter Spacing */}
        <div className="">
          <label className="block text-gray-400 font-medium mb-2">Letter Spacing</label>
          <input
            type="range"
            min="0"
            max="100"
            value={FrontBackImage ? letterSpacing : backLetterSpacing}
            onChange={(e) => applyFontProperty(setLetterSpacing, e.target.value)}
            className="w-full"
          />
        </div>

        {/* Font Color */}
   
          <div className="">
          <label className="block text-gray-400 font-medium mb-2">Font Color</label>
          <div className="flex space-x-2">
            <input
              type="color"
              onChange={(e) => applyFontProperty(setFontColor, e.target.value)}
              className="w-10 h-10"
              />
 
            {colorOptions.map((color, index) => (
              <div
              key={index}
              onClick={() => applyFontProperty(setFontColor, color)}
              className={`w-10 h-10 rounded-full cursor-pointer relative ${themeVariables[theme].borderSecondary}`}
              style={{ backgroundColor: color }}
              >
                {(FrontBackImage ? fontColor : backFontColor) === color && (
                  <MdOutlineCheck className="absolute inset-0 m-auto text-orange-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSettingComponent;
