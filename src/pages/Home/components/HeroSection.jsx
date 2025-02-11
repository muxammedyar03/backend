import { useScrollAnimation } from "../gsapAnimation/gsap";
import ClothingImage from "../images/Custom-Clothing.webp";

const HeroSection = ({lang}) => {
  const elementsRef = useScrollAnimation();
  return (
    <div className={`hero_section w_screen text-white`}>
      <div className="hero_content">
        <div className="hero_text flex_col items-start gap-5">
          <h1  className="hero_title montserrat">
            {lang.heroSection.title}
          </h1>
          <p ref={elementsRef} className="hero_paragraph montserrat mt-4">
            {lang.heroSection.text}
          </p>
          <button  className="hero_button montserrat">
            {lang.button}
          </button>
        </div>
        <div className="hero_image">
          <img
            ref={elementsRef}
            className="w-full h-full object-cover"
            src={ClothingImage}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
