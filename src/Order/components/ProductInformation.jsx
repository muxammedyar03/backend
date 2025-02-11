import { useContext, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { OrderDataContext } from "../Context/OrderDataContext";
import { ClubsImageContext } from "../../Context/ClubsImageContext";
import { useTheme, themeVariables } from "../../Context/Theme";
import BackFootballTextSetting from "./Back/BackFoodballTextSetting";
import { CarouselFrontBackContext } from "../Context/CarouselFrontBackContext";
import TextSettingComponent from "./TextSetting";
import lightGray from '/buttonTextures/lightGray.png' 
import blackTexture from '/buttonTextures/blackTexture.png' 



const ProductInformation = ({TextSetting}) => {
  const color = [
    { id: 0, color: "white", texture: null},
    { id: 2, color: "grayTexture", texture: lightGray },
    { id: 1, color: "gray", texture: null},
    { id: 3, color: "blackTexture", texture: blackTexture},
    { id: 4, color: "black", texture: null},
    { id: 5, color: "navy", texture: null},
    { id: 7, color: "royalBlue", texture: null},
    { id: 9, color: "purple", texture: null},
    { id: 10, color: "burgundy", texture: null},
  ];

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  
  const { setOrder, order } = useContext(OrderDataContext);
  let {FrontBackImage} = useContext(CarouselFrontBackContext)
  let {clubsImage} = useContext(ClubsImageContext)
  let {theme} = useTheme()
  

  // Update size
  const UpdateSize = (size) => {
    setSelectedSize(size); 
    setOrder((prevState) => ({
      ...prevState,
      clothing: {
        ...prevState.clothing,
        size: size,
      },
    }));
  };

  // Update color
  const UpdateColor = (color) => {
    setOrder((prevState) => ({
      ...prevState,
      clothing: {
        ...prevState.clothing,
        color: color,
      },
    }));
  };

  return (
    <div className="w-11/12 p-2 ml-5 flex-shrink">
      <div className={` ${themeVariables[theme].card} rounded p-4 flex_col gap-3`}>
        {/* Header */}
        <h1 className={`text ${themeVariables[theme].text} font-medium`}>Oversized Crewneck Sweatshirt</h1>
        {TextSetting &&
          <TextSettingComponent/>
        }
        <div>
          <p className={`font-medium ${themeVariables[theme].text}`}>Details:</p>
          <p className={`${themeVariables[theme].secondaryText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo qui unde nihil?</p>
        </div>
        <div className={`flex_col ${themeVariables[theme].text}`}>
          <p className="text-sx sm:text-sm md:text-md font-medium">
            Select size
          </p>
          <div className="flex items-center gap-2 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => UpdateSize(size)}
                className={`size_button h-8 w-12 text-blue-500 ${
                  selectedSize === size ? "bg-blue-600 text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        

        {/* Rangni tanlash */}
        <div className="flex flex-col gap-2">
          {clubsImage ? 
            <h2 className={`${themeVariables[theme].text} mt-2 font-semibold`}>
            Product color:
            <span className="ml-2 text-gray-500">
              {order.clothing.color ? order.clothing.color : "white"}
            </span>
          </h2>
            : !FrontBackImage ? <BackFootballTextSetting/> : ''
          }
          {/* Color buttons */}
          {clubsImage ?
            <div className="flex flex-wrap gap-3">
            {color.map((value) => (
              <div
                key={value.id}
                className={`w-10 border border-zinc-400 flex items-center justify-center cursor-pointer h-10 rounded-full`}
                style={{ background: value.texture !== null ? `url(${value.texture})` : value.color == "burgundy" ? "#750033" : value.color}}
                onClick={() => {
                  UpdateColor(value.color)
                }}
                >
                {order.clothing.color === value.color && (
                  <MdOutlineCheck className={`text-white ${value.color !== "gray" && "mix-blend-exclusion"} font-bold text-2xl`}/>
                )}
              </div>
            ))}
          </div>
          :''
        }
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
