import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { IoIosArrowUp } from "react-icons/io";
import shirtLogo from "../images/shirtLogoimage.webp";
import { useScrollAnimation } from "../gsapAnimation/gsap";

const AboutBusiness = ({theme,lang}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const elementsRef = useScrollAnimation();
  return (
    <div className={`about_section w_screen`}>
      <div className="about_img_box">
        <img src={shirtLogo} alt="Shirt" className="about_img" />
      </div>

      <div className="about_content">
        <h1  className={` text-blue-600 about_title montserrat pl-1 pr-1`}>
          {lang.aboutBusiness.title}
        </h1>

        <button  className="about_button button_home montserrat ">
          {lang.button}
        </button>

        <div className="about_accordion_container">
          {lang.aboutBusiness.accordionData.map((d, i) => (
            <div key={i} ref={elementsRef} className="accordion_item">
              <div
                className="accordion_header"
                onClick={() => toggleAccordion(i)}
              >
                <h1 className={`accordion_title montserrat opacity-[0.8] ${theme.text}`}>{d.title}</h1>
                <IoIosArrowUp
                  className={`accordion_arrow ${
                    activeIndex === i ? "" : "rotate-[-180deg]"
                  }`}
                />
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="accordion_content"
                  >
                    <p className={`accordion_text montserrat ${theme.secondaryText}`}>{d.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
