import { useState, useEffect, useContext } from "react";
import { DragTextContext } from "../Context/DragTextContext";
import { CarouselFrontBackContext } from "../Context/CarouselFrontBackContext";
import { OrderDataContext } from "../Context/OrderDataContext";

export const useDraggable = (parentDimensions) => {
    const [positionText, setPositionText] = useState({ x: 0, y: 0 });
  const [backPositionText, setBackPositionText] = useState({ x: 0, y: 0 });

  const {
    DragName,
    DragBackText,
    DragFrontText,
    TextSetting,
    fontStyle,
    fontSize,
    fontWeight,
    fontColor,
    letterSpacing,
    setIsHovered,
    backFontStyle,
    backFontSize,
    backFontWeight,
    backFontColor,
    backLetterSpacing,
  } = useContext(DragTextContext);

  const { FrontBackImage } = useContext(CarouselFrontBackContext);
  const { setOrder } = useContext(OrderDataContext);

  const handleDragText = (e, data, isFront) => {
    const centerX = parentDimensions.width / 2;
    const centerY = parentDimensions.height / 2;

    let newX = Math.max(0, Math.min(data.x, parentDimensions.width - 100));
    let newY = Math.max(0, Math.min(data.y, parentDimensions.height - 30));

    if (Math.abs(centerX - (data.x + 100 / 2)) <= 5) {
      newX = centerX - 100 / 2;
    }

    if (Math.abs(centerY - (data.y + 30 / 2)) <= 5) {
      newY = centerY - 30 / 2;
    }
    setIsHovered(true)
    if (isFront) {
      setPositionText((prev) =>
        prev.x !== newX || prev.y !== newY ? { x: newX, y: newY } : prev
      );
    } else {
      setBackPositionText((prev) =>
        prev.x !== newX || prev.y !== newY ? { x: newX, y: newY } : prev
      );
    }
  };

  useEffect(() => {
    const key = FrontBackImage ? "front" : "back";
    setOrder((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        text: {
          content: FrontBackImage ? DragFrontText : DragBackText,
          fontFamily: FrontBackImage ? fontStyle : backFontStyle,
          fontSize: FrontBackImage ? fontSize : backFontSize,
          fontWeight: FrontBackImage ? fontWeight : backFontWeight,
          color: FrontBackImage ? fontColor : backFontColor,
          letterSpacing: `${FrontBackImage ? letterSpacing / 5 : backLetterSpacing}px`,
          position: FrontBackImage ? [positionText.x, positionText.y] : [backPositionText.x, backPositionText.y],
        },
      },
    }));
  }, [
    DragName,
    DragFrontText,
    DragBackText,
    TextSetting,
    fontStyle,
    fontSize,
    fontWeight,
    fontColor,
    letterSpacing,
    positionText,
    backFontStyle,
    backFontSize,
    backFontWeight,
    backFontColor,
    backLetterSpacing,
    FrontBackImage,
    backPositionText,
  ]);

    return {
      positionText: positionText || { x: 0, y: 0 }, // Default value to prevent destructuring error
      backPositionText: backPositionText || { x: 0, y: 0 }, // Default value to prevent destructuring error
      handleDragText,
      FrontBackImage,
      fontStyle,
      fontSize,
      fontWeight,
      fontColor,
      letterSpacing,
      backFontStyle,
      backFontSize,
      backFontWeight,
      backFontColor,
      backLetterSpacing,
      DragFrontText,
      DragBackText,
      TextSetting,
      setIsHovered,
    };
  };
  