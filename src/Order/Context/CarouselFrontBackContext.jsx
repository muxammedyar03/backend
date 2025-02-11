import { createContext, useState } from "react";

export let CarouselFrontBackContext = createContext(null)

// bu context  rasmni front va back tomoniga ozgartrsh uchun
export let CarouselFrontBackProvider = ({children})=>{

let [FrontBackImage,setFrontBackImage] = useState(true)
let [FrontBackDrag,setFrontBackDrag] = useState(true)
let [ProductColor,setProductColor] = useState("white")
    return(
        <CarouselFrontBackContext.Provider value={{FrontBackImage,setFrontBackImage,FrontBackDrag,setFrontBackDrag,ProductColor,setProductColor}}>
            {children}
        </CarouselFrontBackContext.Provider>
    )
}