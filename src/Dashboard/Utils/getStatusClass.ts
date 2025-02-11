import { OrderStatus } from "../../utils/types";

export const getOrderStatusClassName = (status : OrderStatus) => {
    switch (status) {
        case "new":
            return "bg-green-500 text-white";
        case "in-progress":
            return "bg-orange-500 text-white";
        case "finished":
            return "bg-purple-600 text-white";
        case "received":
            return "bg-blue-500 text-white";
        default:
            return "text-green-600";
    }
}