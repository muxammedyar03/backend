import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const elementsRef = useRef([]); 

  useEffect(() => {
    elementsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, filter: "blur(5px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const setRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el); 
    }
  };

  return setRefs; 
};
