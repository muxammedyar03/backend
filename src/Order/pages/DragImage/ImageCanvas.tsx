import { CarouselFrontBackContext } from '../../Context/CarouselFrontBackContext';
import { getProductImage, generateStroke,generateTexStroke } from '../../../utils/getProductImages'
import React, { useContext, useRef, useState } from 'react';
import { OrderDataContext } from '../../Context/OrderDataContext';
import DraggableImage from './DraggableImage';
import useControlPrintArea from '../../Hooks/useControlPrintArea';
import { ImageCanvasProps } from '../../../utils/types';
import useImageCanvasLogic from './ImageCanvasLogic';
import DraggableTextChild from '../DragText/DraggableTextChild';
import BackTextsFoodball from '../../../Order/components/Back/BackTextsFoodball';
import { ClubsImageContext } from '../../../Context/ClubsImageContext';

const ImageCanvas:React.FC<ImageCanvasProps> = ({param, frontImage, backImage, onSendData}) => {
  const printAreaRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [strokeBorder,setStrokeBorder] = useState(false)
  const { FrontBackImage } = useContext(CarouselFrontBackContext);
  const {parentDimensions} = useImageCanvasLogic(FrontBackImage ? frontImage : backImage, onSendData);
  
  const { printArea } = useControlPrintArea({ printAreaRef });
  const { order } = useContext(OrderDataContext);
  let { clubsImage } = useContext(ClubsImageContext);
  
  const image = getProductImage(
    order.clothing.color == 'White' ? order.clothing.color.toLowerCase() : order.clothing.color, 
    null, 
    param, 
    FrontBackImage ? 'front' : 'back',
  );  
  
  return (
    <div className='w-[85%] h-[85%] -translate-x-5 '>
      <svg viewBox="0 0 647.6838079048023 647.6838079048023" width="100%" height="747.68" xmlns="http://www.w3.org/2000/svg">
          {/* Clothe image */}
          <image xlinkHref={image.src} className='tshirt' width={image.width} height={image.height} onClick={()=> {setIsHovered(false), setStrokeBorder(false)}}></image>
            {/* logo image draggable */}
            <g transform="translate(185.163, 113.884)" ref={printAreaRef}>
              <rect width="270" height="298" fill="transparent" stroke={generateStroke(frontImage, order.clothing.color, isHovered)} strokeDasharray={5}></rect>
              <rect width="270" height="298" fill="transparent" stroke={generateStroke(backImage, order.clothing.color, isHovered)} strokeDasharray={5}></rect>
              <g></g>
              <rect width="270" height="298" fill="transparent" stroke={generateTexStroke(strokeBorder,order.clothing.color)} strokeDasharray={5}></rect>
              <g transform="rotate(0, 82.33333333333333, 82.33333333333333)" className='print_area'>
                <DraggableImage
                  isHovered={isHovered}
                  printArea={printArea}
                  setIsHovered={setIsHovered}
                  imageSrc={FrontBackImage ? frontImage : backImage}
                  onSendData={onSendData}
                  color={order.clothing.color}
                />
                {clubsImage 
                ? <DraggableTextChild parentDimensions={parentDimensions} strokeBorder={strokeBorder} printArea={printArea} setStrokeBorder={setStrokeBorder}/>
                : !FrontBackImage && <BackTextsFoodball className="" TextStyle="" NumberStyle="" printArea={printArea} /> }
              </g>
            </g>
      </svg>
    </div>
  )
}

export default ImageCanvas;

