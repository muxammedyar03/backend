import React, { useState, useEffect, useContext } from "react";
import { db } from "../../database/db";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { DragTextContext } from "../../Order/Context/DragTextContext";
import { useTheme,themeVariables } from "../../Context/Theme";

const Modal = ({ isOpen, setIsOpen }) => {
  let { id } = useParams();
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(id ? 'Futbol' : 'Futbolkalar'); 

  const closeModal = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); 
  };

  useEffect(() => {
    if (isOpen) {
      setFadeOut(false);
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when modal is closed
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  // Find category and club based on ID
  const category = db.find((cat) =>
    cat.clubs && cat.clubs.some((club) => club.id === parseInt(id))
  );

  // Filter out the selected club from the category
  let cardFodball = category?.clubs.filter((item) => item.id !== parseInt(id));

  let navigate = useNavigate();

  // Futbol uchun kartalarni olish
  const fotballCategory = db.find((category) => category.id === 1);
  const fotballCard = fotballCategory ? fotballCategory.clubs : []; // Kategoriya ichidagi futbol kartalari

let futbolkalarga = db[1]

let {setTextsetting} = useContext(DragTextContext)
useEffect(()=>{
    setTextsetting(false); 
},[navigate])

let {theme} = useTheme()
let themeClass = themeVariables[theme]
  return (
    <>
      {isOpen && (
        <div
          className={`fixed flex items-center justify-center top-0 left-0 w-full h-full bg-[#00000080] z-50 backdrop-blur-sm transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
          onClick={closeModal}
        >
          <div
            className="w-[60vw] h-[70vh] bg-[#eeeeff] rounded-2xl shadow-lg flex relative transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Left Section: Categories */}
            <div className={` ${themeClass.background} left_box_rouded rounded-[20px 0 20px 0] w-[300px]  pt-3  shadow-lg`}>
              <h2 className={`text-2xl ${themeClass.text} pl-3 font-semibold mb-4`}>Kategoriyalar</h2>
              <ul>
                <li
                  onClick={() => handleCategoryClick("Futbol")}
                  className={` ${themeClass.text} text-lg pl-3 py-1 cursor-pointer transition-all duration-300 ease-in-out transform hover:text-blue-600 ${selectedCategory === "Futbol" ? `${themeClass.card} text-blue-600` : "hover:bg-gray-300"}`}
                >
                  Futbol Uchun
                </li>
                <li
                  onClick={() => handleCategoryClick("Futbolkalar")}
                  className={` ${themeClass.text} text-lg pl-3 py-1 cursor-pointer transition-all duration-300 ease-in-out transform hover:text-blue-600 ${selectedCategory === "Futbolkalar" ? `${themeClass.card} text-blue-600` : "hover:bg-gray-300"}`}
                >
                  Futbolkalar
                </li>
              </ul>
            </div>

            {/* Right Section: Cards */}
            <div className={` ${themeClass.card} right_box_rouded flex flex-col items-center w-full`}>
              <div className="absolute top-2 right-0 px-4">
                <button
                  onClick={closeModal}
                  className="font-bold text-3xl scale-[0.9] cursor-pointer hover:scale-[1] transition-all"
                >
                  <IoMdClose className={themeClass.text} />
                </button>
              </div>

              {/* Cards Grid Section */}
              <div className={` modal_card`}>
                {selectedCategory === "Futbol" 
                  ? (id ? cardFodball : fotballCard)?.map((item) => (
                      <div onClick={() => { navigate(`/create/${item.id}`); closeModal();}} key={item.id} className={` ${themeClass.background} cursor-pointer rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105`}>
                        <img loading="lazy" className="object-contain w-full h-[150px] rounded-lg" src={item.image.front} alt={item.name} />
                        <h3 className={`${themeClass.text} text-lg font-semibold mt-3`}>{item.name}</h3>
                      </div>
                    ))
                  : selectedCategory === "Futbolkalar" && futbolkalarga && (
                    <div onClick={() => { navigate(`/create`); closeModal();}} key={futbolkalarga.id} className={` ${themeClass.background} cursor-pointer rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105`}>
                      <img loading="lazy" className="object-contain w-full h-[150px] rounded-lg" src={futbolkalarga.image} alt={futbolkalarga.name} />
                      <h3 className={` ${themeClass.text} text-lg font-semibold mt-3`}>{futbolkalarga.name}</h3>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
