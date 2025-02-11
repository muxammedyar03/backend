import Draggable from 'react-draggable'
import useImageCanvasLogic from './ImageCanvasLogic';
import { IoIosResize } from 'react-icons/io';
import { Trash2Icon } from 'lucide-react';
import { generateStroke } from '../../../utils/getProductImages';
import { DraggableImageProps } from '../../../utils/types';


const DraggableImage: React.FC<DraggableImageProps> = ({imageSrc, onSendData, isHovered, setIsHovered, color, printArea}) => {
  const { position, currentSide, handleDragImage, size, handleResizeStart, sendData, disableDrag, setDisableDrag } = useImageCanvasLogic(imageSrc, onSendData);
    
  return (
    <Draggable
        position={position[currentSide]}
        onDrag={handleDragImage}
        bounds={{
            left: 0,
            top: 0,
            right: printArea.width - size[currentSide].width -30,
            bottom: printArea.height - size[currentSide].width - 30,
        }}
        grid={[10, 10]}>
        <g transform="scale(1)" stroke={generateStroke(imageSrc, color, isHovered)}>
            {/* move delete rotate resize buttons */}
            {isHovered && imageSrc !== "" ? <g fill='transparent'>
                <rect width={size[currentSide].width} height={size[currentSide].width}></rect>
                <g width="100" height="100">
                    {/* right bottom */}
                    <g transform={`translate(${size[currentSide].width - 13}, ${size[currentSide].width -13})`}>
                        <foreignObject width="30" height="30">
                            <button 
                                type="button" 
                                onMouseDown={(e) => handleResizeStart(e)}
                                onMouseEnter={() => setDisableDrag(true)}
                                onMouseLeave={() => setDisableDrag(false)}
                                className='border w-6 h-6 border-blue-500 bg-white rounded-full flex_center' >
                                <IoIosResize className='rotate-90 text-lg'/>
                            </button>
                        </foreignObject>
                    </g>
                    {/* right top */}
                    <g transform={`translate(${size[currentSide].width - 10}, -10)`}>
                        <g transform="translate(0, 0)">
                        <foreignObject width="30" height="30">
                            <button type="button" className='border w-6 h-6 border-blue-500 bg-white rounded-full flex_center' onClick={sendData}>
                                <Trash2Icon className='text-2xl' width={18}/>
                            </button>
                        </foreignObject>
                        </g>
                    </g>
                    {/* left top */}
                    <g transform={`translate(-10, -10)`}>
                        <g transform="translate(5.300195072754706, 5.300195072754706)">
                        <circle cx="5.300195072754706" cy="5.300195072754706" r="5.300195072754706" fill="#fff" stroke="#3B82F6" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></circle>
                        </g>
                        <foreignObject width="21.200780291018823" height="21.200780291018823">
                        <button type="button"></button>
                        </foreignObject>
                    </g>
                    {/* left bottom */}
                    <g transform={`translate(-10, ${size[currentSide].width - 10})`}>
                        <g transform="translate(5.300195072754706, 5.300195072754706)">
                        <circle cx="5.300195072754706" cy="5.300195072754706" r="5.300195072754706" fill="#fff" stroke="#3B82F6" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></circle>
                        </g>
                        <foreignObject width="21.200780291018823" height="21.200780291018823" >
                        <button type="button"></button>
                        </foreignObject>
                    </g>
                    </g>
                </g> : null}
            <g onClick={()=> setIsHovered(true)}>
                <rect x="-40.66666666666664" y="-40.66666666666664" width="100" height="100" fill='transparent' opacity="0.5" strokeWidth="0"></rect>
            </g>
            <image
                xlinkHref={imageSrc && imageSrc} width={size[currentSide].width} height={size[currentSide].width} 
                onClick={() => setIsHovered(true)}
                name="draggable"
                />
        </g>
    </Draggable>
  )
}

export default DraggableImage