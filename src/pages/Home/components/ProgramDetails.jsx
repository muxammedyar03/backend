import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import frontBackShirt from "../images/shirtFfrontBack.png";
import { useScrollAnimation } from "../gsapAnimation/gsap";

const ProgramDetails = ({theme,lang}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const elementsRef = useScrollAnimation();

  return (
    <div className={`program_details min-h-[800px] w_screen lg:h-[800px]`}>
      <div className="program_content">
        <h1  className={`program_title montserrat`}>
          {lang.programDetails.titlePage}
        </h1>
        <div className="program_accordion_container">
          {lang.programDetails.accordionData.map((d, i) => (
            <div key={i} ref={elementsRef} className="accordion_item">
              {/* Accordion Header */}
              <div
                className="accordion_header"
                onClick={() => toggleAccordion(i)}
              >
                <h1 className={`${theme.text} montserrat opacity-[0.8] accordion_title`}>{d.title}</h1>
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
                    <p className={`${theme.secondaryText} montserrat accordion_text`}>{d.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="program_image">
        <img ref={elementsRef} src={frontBackShirt} alt="Front and Back Shirt" />
      </div>
    </div>
  );
};

export default ProgramDetails;
