import React, { ReactNode } from "react";

export type Theme = "light" | "dark";
export interface themeVariableType {
  background: string;
  text: string;
  secondaryText: string;
  secondaryBg: string;
  borderSecondary: string;
  card: string;
  input: string;
  button: string;
  buttonSecondary: string;
  solidButton: string;
}
export interface TThemeVariables {
  light: themeVariableType;
  dark: themeVariableType;
}

export interface TChildren {
  children?: React.ReactNode;
}
export interface Catalog {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface TCardProps {
  title?: string;
  imageSrc?: string;
  navigateTo?: string | false;
  children?: React.ReactNode;
  className?: string | undefined;
  isLoading?: boolean;
}
export type OrderStatus = 'new' | 'in-progress' | 'finished' | 'received'

export interface SidebarProps {
  activeMenuItem: OrderStatus | "dashboard";
  setActiveMenuItem: (item: OrderStatus | "dashboard") => void;
}

export interface TUploadContentProps {
  themeClass: themeVariableType;
  FrontBackImage: string | undefined;
  clubsImage: string | undefined;
  setImages: React.Dispatch<
    React.SetStateAction<{ frontImage: string; backImage: string }>
  >;
}

export interface DragTextContextType {
  setDragFrontText: React.Dispatch<React.SetStateAction<string>>;
  setDragBackText: React.Dispatch<React.SetStateAction<string>>;
  DragFrontText: string;
  DragBackText: string;
  TextSetting: boolean;
  setTextsetting: React.Dispatch<React.SetStateAction<boolean>>;

  // Front text properties
  fontStyle: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  letterSpacing: number;
  setFontStyle: React.Dispatch<React.SetStateAction<string>>;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
  setFontWeight: React.Dispatch<React.SetStateAction<string>>;
  setFontColor: React.Dispatch<React.SetStateAction<string>>;
  setLetterSpacing: React.Dispatch<React.SetStateAction<number>>;

  // Back text properties
  backFontStyle: string;
  backFontSize: string;
  backFontWeight: string;
  backFontColor: string;
  backLetterSpacing: number;
  setBackFontStyle: React.Dispatch<React.SetStateAction<string>>;
  setBackFontSize: React.Dispatch<React.SetStateAction<string>>;
  setBackFontWeight: React.Dispatch<React.SetStateAction<string>>;
  setBackFontColor: React.Dispatch<React.SetStateAction<string>>;
  setBackLetterSpacing: React.Dispatch<React.SetStateAction<number>>;

  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface Order {
  customerId: string;
  customerInfo: {
    phone: string;
    telegram: string;
    address: string;
    paymentMethod: string;
    deliveryMethod: string;
  };
  clothing: {
    size: string;
    color: string;
    image: string; // imageFront should be a string URL or base64 string
  };
  front: {
    logo: {
      file: string;
      size: number[];
      position: number[];
    };
    text: {
      content: string;
      fontFamily: string;
      fontSize: string;
      color: string;
      fontWeight: string;
      position: number[];
      letterSpacing: string;
    };
  };
  back: {
    logo: {
      file: string;
      size: number[];
      position: number[];
    };
    text: {
      content: string;
      fontFamily: string;
      fontSize: string;
      color: string;
      fontWeight: string;
      position: number[];
      letterSpacing: string;
    };
  };
  soccer:{
    image: string,
    name:string,
    number:string,
  },
  quantity: number;
  status: OrderStatus
}

export interface TUser {
  fullName: string,
  telegramUsername:string,
  password: string,
  phone: string,
  address: string,
  paymentMethod: 'CARD' | 'CASH',
  deliveryOption: 'DELIVERY' | 'PICKUP',
}

export interface LUser {
  phone: string,
  password:string
}

// Type Definitions
type LogoType = {
  file: string;
  size: number[]; // Assuming size is an array of numbers like [width, height]
  position: number[]; // Assuming position is [x, y]
};

type TextType = {
  content: string;
  fontFamily: string;
  fontSize: string;
  color: string;
  fontWeight: string;
  position: number[]; // Assuming position is [x, y]
  letterSpacing: string;
};

type SideType = {
  logo: LogoType;
  text: TextType;
};

type SoccerType = {
  image: string;
  name: string;
  number: string;
};

type ClothingType = {
  size: string;
  color: string;
  image: string; // Assuming image is a string representing the path
};

export type OrderType = {
  customerId: string;
  clothing: ClothingType;
  front: SideType;
  back: SideType;
  soccer: SoccerType;
  quantity: number;
};

export type OrderDataContextType = {
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
};

export type OrderDataProviderProps = {
  children: ReactNode;
};

export interface TproductImageReturn {
  src: string;
  width: string;
  height: string;
} 

type ImageType = {
  front: string;
  back: string; 
};

export type Club = {
  id: number;
  name: string;
  image: ImageType;
};

export interface TDbItem {
  id: number;
  name: string;
  image: string;
  clubs: Club[] | null;
};

export interface ImageCanvasProps {
  param: string;
  frontImage: string;
  backImage: string;
  onSendData: (data: any) => void;
}interface PrintArea {
  width: number;
  height: number;
}
export interface DraggableImageProps {
  imageSrc: string;
  onSendData: (any) => void;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  color: string;
  printArea: PrintArea;
}

export interface ErrorMessages {
  [key: string]: string;
}