import { ClubImages } from "./Images"
import { TproductImageReturn } from "./types"

export const getProductImage = (color: string, club: string | null, type: string, imageType: string) : TproductImageReturn => {  
  switch (type) {
      case 'Futbolkalarga': 
        switch (color) {
            case 'white': 
              if(imageType === 'front') {
                  return {src:"https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/1,width=1000,height=1000", width: "647.6838079048023", height: "647.6838079048023" }
              }else if(imageType === 'back') {
                  return {src:"https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/1,width=800,height=800", width: "647.6838079048023", height: "647.6838079048023" }
              }
            case 'grayTexture' : 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/231,width=800,height=800", width: "647.6838079048023", height: "647.6838079048023"}
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/231,width=800,height=800", width: "647.6838079048023", height: "647.6838079048023"}
              }
            case 'gray': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/33,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/33,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            case 'blackTexture': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/228,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/228,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            case 'black': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/2,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/2,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            case 'navy': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/348,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/348,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            case 'royalBlue': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/17,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/17,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            case 'purple': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/134,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/134,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            case 'burgundy': 
              if(imageType === 'front') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/1/appearances/22,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }else if(imageType === 'back') {
                return {src: "https://image.spreadshirtmedia.com/image-server/v1/productTypes/48/views/2/appearances/22,width=800,height=800", width: "647.6838079048023", height: "647.68" };
              }
            default : return {src:"", width: "647.6838079048023", height: "647.6838079048023" }

        }
      case "Real Madrid" : 
        if(imageType == "front"){
          return {src: ClubImages.RealMadrid.front, width: "647.6838079048023", height: "647.6838079048023"}
        }else if(imageType === 'back') {
          return {src: ClubImages.RealMadrid.back, width: "647.6838079048023", height: "647.6838079048023"}
        }
      case "Manchester City" :  
        if(imageType == "front"){
          return {src: ClubImages.ManchesterCity.front, width: "647.6838079048023", height: "647.6838079048023"}
        }else if(imageType === 'back') {
          return {src: ClubImages.ManchesterCity.back, width: "647.6838079048023", height: "647.6838079048023"}
        }
      case "Juventus Club" :
        if(imageType == "front"){
          return {src: ClubImages.Juventus.front, width: "647.6838079048023", height: "647.6838079048023" }
        }else if(imageType === 'back') {
          return {src: ClubImages.Juventus.back, width: "647.6838079048023", height: "647.6838079048023" }
        }
    default: return {src:"Topilmadi", width: "647.6838079048023", height: "647.6838079048023" }
  }
}

export const generateStroke = (image : string, color : string, isHovered : boolean)=> {
  if(image !== '' && isHovered ) {
    if(color == 'white' || color == 'grayTexture' || color == 'White'){
      return '#000'
    }
    return '#fff'
  }
  return 'transparent'
}

export const generateTexStroke = (stroke:boolean,color:string) => {
if(stroke){
  if(color == 'white' || color == 'grayTexture' || color == 'White'){
  return '#000'
  }
  return '#fff'
}

return 'transparent'


}