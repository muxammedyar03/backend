import { createContext, useRef } from "react";

export const ScrollContext = createContext(null)

export const ScrollProvider = ({children})=>{
    // Home Scroll
    const homeRef = useRef(null);
    const homeScroll = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    };
    // Sayt Haqida Scroll
    const aboutRef = useRef(null);
    const aboutScroll = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    // Category Scroll
    const categoryRef = useRef(null);
    const categoryScroll = () => {
        categoryRef.current.scrollIntoView({ behavior: "smooth" });
    };
      // Contact Scroll
      const contactRef = useRef(null);
      const contactScroll = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      };


    return (
        <ScrollContext.Provider
         value={{
            homeRef,
            homeScroll,
            aboutRef,
            aboutScroll,
            categoryRef,
            categoryScroll,
            contactRef,
            contactScroll
         }}
         > 
        {children}
        </ScrollContext.Provider>
    )
}