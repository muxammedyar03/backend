import {DragTextContextType} from '../../utils/types'
import { createContext, useState} from "react";

const defaultValue: DragTextContextType = { setDragFrontText: () => {}, setDragBackText: () => {}, DragFrontText: "", DragBackText: "", TextSetting: false, setTextsetting: () => {},fontStyle: "Arial",fontSize: "18px",fontWeight: "bold",fontColor: "#000000",letterSpacing: 5,setFontStyle: () => {},setFontSize: () => {},setFontWeight: () => {},setFontColor: () => {},setLetterSpacing: () => {},backFontStyle: "Arial",backFontSize: "18px",backFontWeight: "bold",backFontColor: "#000000",backLetterSpacing: 5,setBackFontStyle: () => {},setBackFontSize: () => {},setBackFontWeight: () => {},setBackFontColor: () => {},setBackLetterSpacing: () => {},isHovered: false,setIsHovered: () => {},};

export const DragTextContext = createContext<DragTextContextType>(defaultValue);

export const DragTextProvider:React.FC<{ children: React.ReactNode }> = ({ children }) => {

  let [DragFrontText, setDragFrontText] = useState<string>("");
  let [DragBackText, setDragBackText] = useState<string>("");
  let [TextSetting, setTextsetting] = useState<boolean>(false);
  
  // Front text uchun 
  let [fontStyle, setFontStyle] = useState<string>("Arial");
  let [fontSize, setFontSize] = useState<string>("18px");
  let [fontWeight, setFontWeight] = useState<string>("bold");
  let [fontColor, setFontColor] = useState<string>("#000000");
  const [letterSpacing, setLetterSpacing] = useState(5);

  // Back text uchun 
  let [backFontStyle, setBackFontStyle] = useState<string>("Arial");
  let [backFontSize, setBackFontSize] = useState<string>("18px");
  let [backFontWeight, setBackFontWeight] = useState<string>("bold");
  let [backFontColor, setBackFontColor] = useState<string>("#000000");
  const [backLetterSpacing, setBackLetterSpacing] = useState<number>(5);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <DragTextContext.Provider
      value={{
        setDragFrontText,
        setDragBackText,
        DragFrontText,
        DragBackText,
        TextSetting,
        setTextsetting,
        
        // Front text uchun 
        fontStyle,
        fontSize,
        fontWeight,
        fontColor,
        letterSpacing,
        setFontStyle,
        setFontSize,
        setFontWeight,
        setFontColor,
        setLetterSpacing,

        // Back text uchun 
        backFontStyle,
        backFontSize,
        backFontWeight,
        backFontColor,
        backLetterSpacing,
        setBackFontStyle,
        setBackFontSize,
        setBackFontWeight,
        setBackFontColor,
        setBackLetterSpacing,

        isHovered,
        setIsHovered
      }}
    >
      {children}
    </DragTextContext.Provider>
  );
};
