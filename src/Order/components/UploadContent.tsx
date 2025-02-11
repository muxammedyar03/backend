import { useContext, useRef, useState } from 'react'
import { LuShirt } from 'react-icons/lu'
import { MdOutlineFileUpload } from 'react-icons/md'
import { RxText } from 'react-icons/rx'
import {TUploadContentProps} from '../../utils/types'
import { DragTextContext } from '../Context/DragTextContext'
import ModalProduct from "../components/ModalProduct.jsx";

const UploadContent: React.FC<TUploadContentProps> = ({
  themeClass,
  FrontBackImage,
  clubsImage,
  setImages,
}) => {
  let fileRef = useRef<HTMLInputElement | null>(null);
  const { setIsHovered, setDragBackText, setDragFrontText, setTextsetting} = useContext(DragTextContext);
  let [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      setIsHovered(true);
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          setImages((prevImage) => ({ ...prevImage, ...(FrontBackImage ? {frontImage: reader.result as string} : {backImage: reader.result as string})}));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleText = () => {
    if (FrontBackImage) {
      setDragFrontText("Front Text");
      setIsHovered(true);
      setTextsetting(true)
    } else {
      setDragBackText("Back Text");
      setTextsetting(true)
    }
  };


  return (
    <div className="w-1/3 h-full">
      <div className={`${themeClass.card} flex items-center flex-col shadow mt-20 ml-16 w-24 `}>
        <button onClick={()=>setIsModalOpen(true)} className={`flex ${themeClass.text} ${themeClass.solidButton} w-full py-5 flex-col items-center `}>
          <LuShirt />
          <p className={`text_paragraph`}>Products</p>
        </button>

        <button
          onClick={() => handleText()}
          disabled={FrontBackImage ? clubsImage ? false : true : !clubsImage ? true : false}
          className={`flex w-full py-4 flex-col items-center ${themeClass.text} ${themeClass.solidButton}`}
        >
          <RxText />
          <p className="text_paragraph">Text</p>
        </button>

        <button
          onClick={() => fileRef?.current?.click()}
          disabled={FrontBackImage ? clubsImage ? false : true : !clubsImage ? true : false}
          className={`flex w-full py-4 flex-col items-center ${themeClass.text} ${themeClass.solidButton}`}
        >
          <input
            type="file"
            className="hidden"
            ref={fileRef}
            onChange={handleImageUpload}
          />
          <MdOutlineFileUpload />
          <p className="text_paragraph">Upload</p>
        </button>
      </div>
      <ModalProduct isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
    </div>
  )
}

export default UploadContent