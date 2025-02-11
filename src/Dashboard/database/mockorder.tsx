import { Order } from "../../utils/types";
export const orders: Order[] = [
    {
      customerId: "645c123f6bd12c5abc123789",
      customerInfo: {
        phone: "123-456-7890",
        telegram: "@customer_telegram",
        address: "123 Street, City",
        paymentMethod: "Credit Card",
        deliveryMethod: "Courier",
      },
      clothing: {
        size: "L",
        color: "Black",
        image: "../../../public/images/front.png", // Tasodifiy rasm URL
      },
      front: {
        logo: {
          file: "https://i.pinimg.com/originals/e1/47/63/e147633a4fab84f5bc60f9d72e0e5b13.png",
          size: [100, 100],
          position: [10, 20],
        },
        text: {
          content: "Design Text",
          fontFamily: "Arial, sans-serif",
          fontSize: "16",
          color: "#FF5733",
          fontWeight: "bold",
          position: [15, 30],
          letterSpacing: "1",
        },
      },
      back: {
        logo: {
          file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtuGX9rL-oamTSa4b8SfRYV3m0MzbEVQ9kw&s",
          size: [120, 120],
          position: [25, 35],
        },
        text: {
          content: "Back Design Text",
          fontFamily: "Verdana, sans-serif",
          fontSize: "14",
          color: "#33FF57",
          fontWeight: "normal",
          position: [10, 25],
          letterSpacing: "0.5",
        },
      },
      soccer:{
        image: "",
        name:"",
        number:"",
      },
      quantity: 3,
      status: "received",
    },
    {
      customerId: "sddsf",
      customerInfo: {
        phone: "123-456-7890",
        telegram: "@customer_telegram",
        address: "123 Street, City",
        paymentMethod: "Credit Card",
        deliveryMethod: "Courier",
      },
      clothing: {
        size: "L",
        color: "Black",
        image: "/images/front.png", // Tasodifiy rasm URL
      },
      front: {
        logo: {
          file: "https://ensigame.com/storage/uploads/images/562/1.png",
          size: [100, 100],
          position: [10, 20],
        },
        text: {
          content: "Front Design Text",
          fontFamily: "Arial, sans-serif",
          fontSize: "16",
          color: "#FF5733",
          fontWeight: "bold",
          position: [15, 30],
          letterSpacing: "1",
        },
      },
      back: {
        logo: {
          file: "https://i.pinimg.com/originals/e1/47/63/e147633a4fab84f5bc60f9d72e0e5b13.png",
          size: [120, 120],
          position: [25, 35],
        },
        text: {
          content: "Back Design Text",
          fontFamily: "Verdana, sans-serif",
          fontSize: "14",
          color: "#33FF57",
          fontWeight: "normal",
          position: [10, 25],
          letterSpacing: "0.5",
        },
      },
      soccer:{
        image: "",
        name:"",
        number:"",
      },
      quantity: 3,
      status: "new",
    },
    {
      customerId: "sdf",
      customerInfo: {
        phone: "123-456-7890",
        telegram: "@customer_telegram",
        address: "123 Street, City",
        paymentMethod: "Credit Card",
        deliveryMethod: "Courier",
      },
      clothing: {
        size: "L",
        color: "",
        image: "", // Tasodifiy rasm URL
      },
      front: {
        logo: {
          file: "https://ensigame.com/storage/uploads/images/562/1.png",
          size: [100, 100],
          position: [10, 20],
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
          size: [120, 120],
          position: [25, 35],
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
      soccer:{
        image: "../../../public/img/hd/juv_back.png",
        name:"Cristiano Ronaldo",
        number:"7",
      },
      quantity: 3,
      status: 'finished',
    },
    
  ];
