import { createContext, useState, ReactNode } from "react";
import imageFront from "/images/front.png";
import { OrderDataContextType, OrderDataProviderProps, OrderType } from "../../utils/types";



// Context
export const OrderDataContext = createContext<OrderDataContextType | null>(null);

// Context Provider
export const OrderDataProvider = ({ children }: OrderDataProviderProps) => {
  const [order, setOrder] = useState<OrderType>({
    customerId: "645c123f6bd12c5abc123456",
    clothing: {
      size: "M",
      color: "White",
      image: imageFront,
    },
    front: {
      logo: {
        file: "",
        size: [],
        position: [],
      },
      text: {
        content: "",
        fontFamily: "",
        fontSize: "",
        color: "",
        fontWeight: "",
        position: [],
        letterSpacing: "",
      },
    },
    back: {
      logo: {
        file: "",
        size: [],
        position: [],
      },
      text: {
        content: "",
        fontFamily: "",
        fontSize: "",
        color: "",
        fontWeight: "",
        position: [],
        letterSpacing: "",
      },
    },
    soccer: {
      image: "",
      name: "",
      number: "",
    },
    quantity: 1,
  });

  return (
    <OrderDataContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderDataContext.Provider>
  );
};
