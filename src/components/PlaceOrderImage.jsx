import { CarouselFrontBackContext } from "../Order/Context/CarouselFrontBackContext";
import { OrderDataContext } from "../Order/Context/OrderDataContext";
import { useContext, useRef, } from "react";
import  ImageShirt from  '/images/front.png'
import { ClubsImageContext } from "../Context/ClubsImageContext";
import { db } from "../database/db";
import BackTextsFoodball from "../Order/components/Back/BackTextsFoodball";
const PlaceOrderImage = ({ImageData }) => {
    const { order } = useContext(OrderDataContext);
    const imgRef = useRef(null); 

  let {clubsImage,orderClubID } = useContext(ClubsImageContext);
   

    // X and Y  TExt position
    const xPosition = order.front.text.position[0];
    const yPosition = order.front.text.position[1]; 
   let {ProductColor} = useContext(CarouselFrontBackContext)


  
   const SoccerImage = () => {
    if (!orderClubID) return null; 

    return (
        db
            .flatMap((cat) => cat.clubs || []) 
            .find((club) => club.id === parseInt(orderClubID)) || null 
    );
};

const foundClub = SoccerImage();

  let id = parseInt(orderClubID)



    return (
        <div className="relative top-0 left-0 md:left-[-40px] lg:left-0 md:w-[400px] h-[450px] flex justify-center items-center">

            {
                clubsImage ? 
                    <div className="absolute w-[650px] scale-[0.74] md:scale-[0.64] lg:scale-[0.70] flex justify-center items-center">
                    <img
                        ref={imgRef}
                        src={ImageShirt}
                        alt={ImageData.cardName}
                        className={`w-full h-auto ${ProductColor === "blue" ? "blue" : ProductColor === "purple" ? "purple" : ProductColor === "green" ? "green" : ""}`}
                    />
                    <div className="absolute  top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[41%] h-[41%]">
                        {order.front.text.content && (
                            <div className="relative w-full h-full">
                                <h1
                                    className="absolute z-10"
                                    style={{
                                        left: `${xPosition}px`,
                                        top: `${yPosition}px`, 
                                        color: order.front.text.color, 
                                        fontSize: order.front.text.fontSize,
                                        fontFamily: order.front.text.fontFamily,
                                        fontWeight: order.front.text.fontWeight,
                                        letterSpacing: order.front.text.letterSpacing,
                                        minWidth: '100px',
                                    }}
                                >
                                    {order.front.text.content}
                                </h1>
                            </div>
                        )}
    
                   
                        {order.front.logo?.file && (
                            <img 
                                src={order.front.logo.file} 
                                className="object-contain"
                                alt="Product"
                                style={{
                                    position: 'absolute',
                                    left: `${order.front.logo.position[0]}px`,
                                    top: `${order.front.logo.position[1]}px`,
                                    width: `${order.front.logo.size[0]}%`,
                                    height: `${order.front.logo.size[1]}%`,
                                }}
                            />
                        )}
                    </div>
                </div>
                 :
                 <div className="absolute w-[650px] scale-[0.50] md:scale-[0.44] lg:scale-[0.56] flex justify-center items-center">
                   <img src={foundClub?.image?.back} className="w-full h-auto" alt="" />
                   <div>
                    <BackTextsFoodball className={'scale-[1.9]'} NumberStyle={` font-bold text-[9rem] line_height mt-5 ${id === 1 ? 'RealFont  ' : id === 2 ? 'manchestrFont' : id === 3 ? 'juventusFont mb-2' : ''}  border-blue-600 cursor-pointer`}  TextStyle={` font-semibold text-4xl ${ id === 1 ? 'RealFont mb-[30px]' : id === 2 ? 'manchestrFont' : id === 3 ? 'juventusFont mb-14' : '' } border-blue-600 text-center  cursor-pointer`}/>
                   </div>
                    </div>
            }
         


        </div>
    );
};

export default PlaceOrderImage;
