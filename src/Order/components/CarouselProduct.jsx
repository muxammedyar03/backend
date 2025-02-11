import imageFront from "/images/front.png";
import imageBack from "/images/back.png";
import { useContext, useEffect } from "react";
import { CarouselFrontBackContext } from "../Context/CarouselFrontBackContext";
import { DragTextContext } from "../Context/DragTextContext";
import { useTheme,themeVariables } from "../../Context/Theme";
import { useParams } from "react-router-dom";
import { db } from "../../database/db";
const CarouselProduct = ({ CarouselProductColor }) => {
  // contextga true or false yuborish va carouselni border rangini ozgartrsh 
  let { setFrontBackImage,FrontBackImage,setProductColor } = useContext(CarouselFrontBackContext);
  let {setTextsetting} = useContext(DragTextContext)

  let handleFrontBackFunction = (data) => {
    setFrontBackImage(data);
    setTextsetting(false)
  };

  let {theme} = useTheme()
  let {id} = useParams()


  const category = db.find(
    (cat) => cat.clubs && cat.clubs.some((club) => club.id === parseInt(id))
  ); // category find
  const club = category ? category.clubs.find((club) => club.id === parseInt(id)) : null; // club find

  useEffect(() => {
    setProductColor(CarouselProductColor)
  }, [CarouselProductColor]);
  return (
    <section>
      <div className="product_carousel_parent_box absolute bottom-[2rem] left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center flex-col">
          {/* Carousel-image-1 */}
          <div
            className={`product_carousel_child_box ${themeVariables[theme].card} ${FrontBackImage ? "border-blue-600" : " border-zinc-400"}`}
            onClick={() => handleFrontBackFunction(true)}
          >
            <img
              src={ club ? club.image.front : imageFront}
              className={` ${club ? 'w-14' : ''} ${CarouselProductColor === "blue" ? "blue" : CarouselProductColor === "purple" ? "purple" : CarouselProductColor === "green" ? "green" : ""}`}
              alt="mockupFront"
              loading="lazy"
            />
          </div>
          <p className={`text-sm ${themeVariables[theme].text}`}>Front</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          {/* Carousel-image-2 */}
          <div
            className={`product_carousel_child_box ${themeVariables[theme].card} ${!FrontBackImage ? "border-blue-600" : " border-zinc-400"}`}
            onClick={() => handleFrontBackFunction(false)}
          >
            <img
              src={ club ? club.image.back : imageBack}
              className={`${club ? 'w-14' : ''} ${CarouselProductColor === "blue" ? "blue" : CarouselProductColor === "purple" ? "purple" : CarouselProductColor === "green" ? "green" : ""}`}
              alt="mockupBack"
              loading="lazy"
            />
          </div>
          <p className={`text-sm ${themeVariables[theme].text}`}>Back</p>
        </div>
      </div>
    </section>
  );
};

export default CarouselProduct;
