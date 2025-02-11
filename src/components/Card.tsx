import React, { useState } from "react";
import { Icons } from "../UI/icons";
import { useNavigate } from "react-router-dom";
import { OrderStatus, TCardProps } from "../utils/types";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTheme, themeVariables } from "../Context/Theme";
import { getOrderStatusClassName } from "../Dashboard/Utils/getStatusClass";
const Card: React.FC<TCardProps> = ({
  title,
  imageSrc,
  navigateTo,
  children,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className={`rounded-3xl overflow-hidden card relative h-[340px] lg:h-[440px] ${className}`}
      onClick={() => navigate(navigateTo ? navigateTo : "")}
    >
      {/* <img
        className={`object-contain w-full h-full transition-all duration-500 ${imageLoaded ? 'blur-0' : 'blur-sm'}`}
        src={imageLoaded ? `${imageSrc}` : `${imageSrc}?w=10`}
        alt={title}
        loading="lazy"
        onLoad={handleImageLoad}
      /> */}
      <img
        className={`object-contain w-full h-full transition-all duration-500 ${imageLoaded ? "blur-0" : "blur-md"}`}
        srcSet={`${imageSrc}?w=300 300w, ${imageSrc}?w=600 600w, ${imageSrc}?w=1200 1200w`}
        sizes="(max-width: 600px) 300px, (max-width: 1200px) 300px, 500px"
        alt={title}
        loading="lazy"
        onLoad={handleImageLoad}
      />
      <div className="flex justify-between gap-5 w-full absolute px-3 bottom-0 py-3 z-10 text-orange-100">
        <h2 className="label">{title}</h2>
        {!children && <Icons.Right className="left_icon" />}
        {children}
      </div>
    </div>
  );
};

export default Card;

// Admin Panel Order Card //

interface TDashboardOrderType {
  logoUrl: string;
  text: string;
  backText: string;
  size: string;
  quantity: number;
  clothingColor: string;
  status: OrderStatus
  infoMOdal: () => void;
  sendData: () => void;
}

export const DashboardOrderCard: React.FC<TDashboardOrderType> = ({
  logoUrl,
  text,
  backText,
  size,
  quantity,
  clothingColor,
  status,
  infoMOdal,
  sendData,
}) => {
  const { theme } = useTheme();
  const themeClass = themeVariables[theme]; // Assuming you have themeVariables defined elsewhere

  return (
    <div
      onClick={() => sendData()}
      className={`scale-[0.99] hover:scale-[1] transition-all p-6 rounded-lg shadow-lg ${themeClass.card}`}
    >
      <div
        onClick={() => infoMOdal()}
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-start space-x-4">
          {/* Increase image size */}
          <img
            loading="lazy"
            src={logoUrl}
            alt="Logo"
            className="w-32 h-32 object-contain"
          />
          <div className={themeClass.text}>
            {/* Product Information */}
            {
              (text || backText) ? 
              <p>
              <strong>Text:</strong> {text ? text : backText}
            </p>
            : ""
            }
          
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 h-4 rounded-full ${getOrderStatusClassName(status)}`}
              >
                {status}
              </span>
            </p>
            <p>
              <strong>Quantity:</strong> {quantity}
            </p>
            <p>
              <strong>Size:</strong> {size}
            </p>{" "}
            {/* Assuming position holds size */}
            {
              clothingColor ? 
              <p>
              <strong>Color:</strong> {clothingColor}
            </p> : ""
            }
        
            {/* Assuming fontFamily holds color */}
          </div>
        </div>
        <MdKeyboardArrowRight className="font-bold text-blue-600 text-3xl" />
      </div>

      {/* Accordion Content */}
    </div>
  );
};
