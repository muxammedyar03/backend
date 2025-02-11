import { useEffect, useRef, useState } from "react";
import { useDraggable } from "../../Hooks/useDraggableText";
import Draggable from "react-draggable";

const DraggableTextChild = ({ parentDimensions, strokeBorder, printArea, setStrokeBorder}) => {
  const textRef = useRef(null);
  const [textDimensions, setTextDimensions] = useState({ width: 0, height: 0 });
  const draggableTextProps = useDraggable(parentDimensions);

  useEffect(() => {
    if (textRef.current) {
      const bbox = textRef.current.getBBox(); // Text element o‘lchamini olish
      setTextDimensions({ width: bbox.width, height: bbox.height });
    }
  }, [draggableTextProps.fontSize, draggableTextProps.fontWeight, draggableTextProps.fontStyle, draggableTextProps.letterSpacing, draggableTextProps.FrontBackImage, draggableTextProps.DragFrontText, draggableTextProps.DragBackText]);
  
  return (
    <Draggable
      onDrag={(e, data) => draggableTextProps.handleDragText(e, data, draggableTextProps.FrontBackImage)}
      grid={[10, 10]}
      bounds={{
        left: 0,
        top: textDimensions.height,
        right: printArea.width - textDimensions.width - 30,
        bottom: printArea.height - textDimensions.height 
    }}>
        <g onClick={()=> setStrokeBorder(true)}>
          <rect width={textDimensions.width + 5} height={textDimensions.height} transform={`translate(-2.5, -${textDimensions.height / 1.2})`} stroke={strokeBorder ?'#2563EB' : ""} fill='transparent'></rect>
          <text 
            ref={textRef}
            style={{
              fontFamily: draggableTextProps.FrontBackImage ? draggableTextProps.fontStyle : draggableTextProps.backFontStyle,
              fontSize: draggableTextProps.FrontBackImage ? draggableTextProps.fontSize : draggableTextProps.backFontSize,
              fontWeight: draggableTextProps.FrontBackImage ? draggableTextProps.fontWeight : draggableTextProps.backFontWeight,
              fill: draggableTextProps.FrontBackImage ? draggableTextProps.fontColor : draggableTextProps.backFontColor,
              letterSpacing: `${draggableTextProps.FrontBackImage ? draggableTextProps.letterSpacing / 5 : draggableTextProps.backLetterSpacing}px`,
              lineHeight: "100%",
            }}
            onClick={()=> setStrokeBorder(true)}
            className='cursor-pointer'>
            {draggableTextProps.FrontBackImage? draggableTextProps.DragFrontText : draggableTextProps.DragBackText}
          </text>
        </g>
    </Draggable>
  );
};

export default DraggableTextChild;
