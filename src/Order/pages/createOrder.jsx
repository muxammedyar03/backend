import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { db } from "../../database/db.js";
import Navbar from "../../components/navbar";
import { useTheme, themeVariables } from "../../Context/Theme";
import ProductInformation from "../components/ProductInformation.jsx";
import CarouselProduct from "../components/CarouselProduct.jsx";
import { DragTextContext } from "../Context/DragTextContext.tsx";
import { CarouselFrontBackContext } from "../Context/CarouselFrontBackContext.jsx";
import { ClubsImageContext } from "../../Context/ClubsImageContext.jsx";
import { OrderDataContext } from "../Context/OrderDataContext.tsx";
import UploadContent from "../components/UploadContent";
import { BackFoodballTextContext } from "../Context/BackFoodballTextContext.jsx";
import ImageCanvas from "./DragImage/ImageCanvas.tsx";
import { AuthContext } from "../../Context/AuthContext.jsx";
export default function CreateOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [images, setImages] = useState({frontImage: "", backImage: ""});
  const { order, setOrder } = useContext(OrderDataContext);

  let {TextSetting,setIsHovered,} = useContext(DragTextContext);
  let { FrontBackImage } = useContext(CarouselFrontBackContext);
  let { setClubsImage, clubsImage ,setOrderClubID } = useContext(ClubsImageContext);
  
  let { theme } = useTheme();
  const themeClass = themeVariables[theme];
  
  const category = db.find(item => item.clubs !== null)
  const club = category.clubs.find(item => item.name === id)

  const deleteImg = (data) => {
    setImages((prevImage) => ({ ...prevImage, ...(FrontBackImage ? { frontImage: data } : { backImage: data }),}));
  };
  const {numberInput, change_Name} = useContext(BackFoodballTextContext);
  useEffect(() => {
    club ? setClubsImage(false) : setClubsImage(true);
      setOrderClubID(id)
  }, [id]);
  
 
  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      soccer:{
        image: club ? club.image.back : "",
        name: club ? change_Name : "",
        number: club ? numberInput : "",
      }
    }));
  }, [club,numberInput,change_Name]);


let {authValue,setAuthValue} = useContext(AuthContext)
console.log(authValue);
  return (
    <div className={`h-[100vh] flex_center flex-col`} >
      <Navbar>
        <button
          className={` ${themeClass.button}w-38 rounded-full h-12 text-white flex_center gap-2 bg-blue-500 px-4 hover:bg-blue-400 transition`}
          onClick={() => navigate(authValue ? "/place-order" : "/auth")}
        >
          <span>Place Order<BiCart className="text-xl inline-block ml-1" /></span> 
        </button>
      </Navbar>
      <div className={` ${themeClass.background} justify-center h-full flex items-center gap-2 bg-[#f3f3f3] w-full `}>
        <UploadContent themeClass={themeClass}FrontBackImage={FrontBackImage} clubsImage={clubsImage} setImages={setImages}/>
        <div
          className="flex items-center justify-center w-3/2"
          onClick={() => setIsHovered(false)}>
            <CarouselProduct CarouselProductColor={order.clothing.color} />
            <ImageCanvas param={id} frontImage={images.frontImage} backImage={images.backImage} onSendData={deleteImg}/>
        </div>
        <div className="flex h-full flex-shrink-0 flex-col justify-end p-4 items-bottom  w-[30%]">
          <ProductInformation TextSetting={TextSetting}/>
        </div>
      </div>
    </div>
  );
}

