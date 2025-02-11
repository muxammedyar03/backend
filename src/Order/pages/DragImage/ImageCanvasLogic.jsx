import { useContext, useState, useEffect, useRef } from "react";
import { DragTextContext } from "../../Context/DragTextContext";
import { CarouselFrontBackContext } from "../../Context/CarouselFrontBackContext";
import { OrderDataContext } from "../../Context/OrderDataContext";

const useImageCanvasLogic = (imageSrc, onSendData) => {
  const [position, setPosition] = useState({ front: { x: 0, y: 0 }, back: { x: 0, y: 0 } });
  const [size, setSize] = useState({ front: { width: 100, height: 100 }, back: { width: 100, height: 100 } });
  const [IsBorderHovered, setIsBorderHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [disableDrag, setDisableDrag] = useState(false);

  const parentDimensions = { width: 400, height: 400 };
  const imageDraggableRef = useRef();

  const { DragFrontText, DragBackText, setIsHovered} = useContext(DragTextContext);
  const { FrontBackImage } = useContext(CarouselFrontBackContext);
  const { setOrder,order } = useContext(OrderDataContext);

  const currentSide = FrontBackImage ? "front" : "back";

  /**
   *  drag .
   */
  const handleDragImage = (e, data) => {
    const newX = Math.max(0, Math.min(data.x, parentDimensions.width - size[currentSide].width));
    const newY = Math.max(0, Math.min(data.y, parentDimensions.height - size[currentSide].height));
    setPosition((prev) => ({ ...prev, [currentSide]: { x: newX, y: newY } }));
  };

  /**
   *  resize .
   */
  const handleResizeStart = (e) => {
    e.preventDefault();
    const startSize = { ...size[currentSide] };
    const startPosition = { x: e.pageX, y: e.pageY };

    const onMouseMove = (moveEvent) => {
      setSize((prev) => ({
        ...prev,
        [currentSide]: {
          width: Math.max(50, Math.min(200, startSize.width + moveEvent.pageX - startPosition.x)),
          height: Math.max(50, Math.min(200, startSize.height + moveEvent.pageY - startPosition.y)),
        },
      }));
    };

    const onMouseUp = () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseup", onMouseUp);
    };

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  /**
   * image delete.
   */
  const sendData = () => {
    setOrder((prev) => ({
      ...prev,
      [currentSide]: { ...prev[currentSide], logo: { file: "", size: [], position: [] } },
    }));
    onSendData("");
  };

  /**
   * context objectni update 
   */
  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      [currentSide]: {
        ...prev[currentSide],
        logo: {
          file: imageSrc,
          size: [size[currentSide].width, size[currentSide].height],
          position: [position[currentSide].x, position[currentSide].y],
        },
      },
    }));
  }, [imageSrc, position, size, currentSide, setOrder]);
  return {
    position,
    size,
    IsBorderHovered,
    isMouseDown,
    disableDrag,
    parentDimensions,
    imageDraggableRef,
    DragFrontText,
    DragBackText,
    currentSide,
    setIsBorderHovered,
    setIsMouseDown,
    handleDragImage,
    handleResizeStart,
    sendData,
    setDisableDrag,
  };
};

export default useImageCanvasLogic;
