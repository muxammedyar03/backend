import { useRef, useEffect, useContext } from "react";
import Draggable from "react-draggable";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosResize } from "react-icons/io";
import useImageCanvasLogic from "./ImageCanvasLogic";
import { DragTextContext } from "../../Context/DragTextContext";

interface TImageCanvasUI {
  imageSrc: string;
  onSendData: (data: string) => void;
}

const ImageCanvasUI:React.FC<TImageCanvasUI> = ({ imageSrc, onSendData }) => {
  const containerRef = useRef(null); 
  const imageDraggableRef = useRef(null);
  const { isHovered, setIsHovered } = useContext(DragTextContext);

  const {
    position,
    size,
    isMouseDown,
    disableDrag,
    parentDimensions,
    DragFrontText,
    DragBackText,
    currentSide,
    setIsMouseDown,
    handleDragImage,
    handleResizeStart,
    sendData,
    setDisableDrag,
  } = useImageCanvasLogic(imageSrc, onSendData);

 
  useEffect(() => {
    const handleClickOutside = (e) => {
     
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);    

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsHovered]);


  return (
    <div
      ref={containerRef}
      className={`absolute top-[37%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[36%] h-[40%] overflow-hidden ${
        isHovered ? "border border-black border-dashed" : ""
      }`}
      onMouseDown={(e) => {
        e.stopPropagation(); 
        setIsMouseDown(true);
      }}
      onMouseUp={() => setIsMouseDown(false)}
      onClick={(e) => {
        e.stopPropagation(); 
      }}
    >
      {isMouseDown && (
        <>
          <div className="absolute h-[2px] w-full bg-blue-500 left-0 top-1/2 transform -translate-y-1/2 z-10"></div>
          <div className="absolute w-[2px] h-full bg-blue-500 top-0 left-1/2 transform -translate-x-1/2 z-10"></div>
        </>
      )}

      {imageSrc && (
        <Draggable
          nodeRef={imageDraggableRef}
          position={position[currentSide]}
          onDrag={handleDragImage}
          bounds="parent"
          disabled={disableDrag}
          grid={[10, 10]}
        >
          <div
            ref={imageDraggableRef}
            className={`absolute ${isHovered ? "border border-gray-400" : ""}`}
            style={{ width: `${size[currentSide].width}%` }}
            onClick={(e) => {
              e.stopPropagation(); 
              setIsHovered(true);
            }}
          >
            <img
              src={imageSrc}
              alt="Draggable"
              className="w-full"
              draggable={false}
              loading="lazy"
            />
            {isHovered && (
              <>
                <button
                  onClick={sendData}
                  className="absolute top-[-10px] left-[-15px] p-1 bg-white rounded-full"
                >
                  <MdDeleteOutline />
                </button>
                <button
                  onMouseDown={handleResizeStart}
                  onMouseEnter={() => setDisableDrag(true)}
                  onMouseLeave={() => setDisableDrag(false)}
                  className="absolute bottom-[-10px] right-[-15px] p-1 bg-white rounded-full cursor-se-resize"
                >
                  <IoIosResize />
                </button>
              </>
            )}
          </div>
        </Draggable>
      )}

  
    </div>
  );
};

export default ImageCanvasUI;
