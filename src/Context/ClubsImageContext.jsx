import { createContext, useState } from "react";

export let ClubsImageContext = createContext(null)

export let ClubsImageProvider = ({children}) =>{

let [clubsImage,setClubsImage] = useState(true)
let [orderClubID,setOrderClubID] = useState('')
    return(
        <ClubsImageContext.Provider value={{clubsImage,setClubsImage,orderClubID,setOrderClubID}}>
            {children}
        </ClubsImageContext.Provider>
    )
}