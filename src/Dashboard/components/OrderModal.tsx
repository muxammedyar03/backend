import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Order } from "../../utils/types";
import { orders } from "../database/mockorder";
import { useTheme, themeVariables } from "../../Context/Theme";
import { IoPersonSharp } from "react-icons/io5";
interface dataTypes {
  ModalData: boolean;
}

interface orderID {
  id: string;
}

type Combined = dataTypes & orderID;

const OrderModal: React.FC<Combined> = ({ ModalData, id }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  let [orderData, setOrderData] = useState<Order | undefined>(undefined);

  let [hiddenAccardion, setHiddenAccardion] = React.useState("");

  let openAccardion = (value: string) => {
    setHiddenAccardion(value);
  };
  useEffect(() => {
    setIsOpen(ModalData);
  }, [ModalData]);

  useEffect(() => {
    if (id) {
      let filter = orders.filter((data) => data.customerId === id);
      setOrderData(filter[0]);
    } else {
      setOrderData(undefined);
    }
  }, [ModalData, id]);

  const { theme } = useTheme();
  const themeClass = themeVariables[theme];

  return (
    <div className="scrollable">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex items-center  justify-center w-[100vw] h-[100vh] top-0 right-0 fixed bg-[#00000052] backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className={`${themeClass.background} w-[70vw] h-[80vh] rounded-lg shadow-lg p-8 overflow-auto scrollable`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // To prevent closing when clicking inside modal
            >
              {/* Header */}
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-6 mb-6">
                  <img
                    src={
                      orderData?.soccer.image !== ""
                        ? orderData?.soccer.image
                        : orderData?.clothing.image
                    }
                    alt="Logo"
                    className="w-[15vw] h-auto object-contain rounded"
                  />
                  <div className="w-full">
                    <p className="text-2xl font-semibold text-blue-600 mb-4">
                      {orderData?.soccer.name !== ""
                        ? orderData?.soccer.name
                        : orderData?.front.text.content
                          ? orderData?.front.text.content
                          : orderData.back.text.content}
                    </p>
                    <table className=" text-md border-collapse border w-[300px] p-2">
                      <tbody>
                        <tr className="border ">
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            Status:
                          </td>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            <span
                              className={` py-1 rounded ${
                                orderData?.status === "new"
                                  ? "text-green-600"
                                  : orderData?.status === "enabled"
                                    ? "text-blue-600"
                                    : orderData?.status === "in-progress"
                                      ? "text-orange-600"
                                      : "text-purple-600"
                              }`}
                            >
                              {orderData?.status}
                            </span>
                          </td>
                        </tr>
                        <tr className={themeClass.borderSecondary}>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            Quantity:
                          </td>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            {orderData?.quantity || "N/A"}
                          </td>
                        </tr>
                        <tr className={themeClass.borderSecondary}>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            Size:
                          </td>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            {orderData?.clothing.size || "N/A"}
                          </td>
                        </tr>
                        <tr className={themeClass.borderSecondary}>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            Color:
                          </td>
                          <td
                            className={`${themeClass.borderSecondary} ${themeClass.secondaryText} p-2`}
                          >
                            {orderData?.clothing.color || "N/A"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Front Information */}
              {orderData?.soccer.name === "" ? (
                <div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">
                      Front Information
                    </h2>
                    <div className="flex flex-col space-y-4 mb-6">
                      <div
                        style={{
                          display: orderData?.front.logo.file
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          onClick={() =>
                            openAccardion(hiddenAccardion === "" ? "logo" : "")
                          }
                          className={`${themeClass.card} mb-2 flex justify-between items-center  p-4 rounded cursor-pointer shadow-md hover:opacity-[0.5] transition-all duration-300 ease-in-out`}
                        >
                          <span className="text-lg font-semibold text-blue-600">
                            Logo Information
                          </span>
                          <IoIosArrowDown
                            className={`${hiddenAccardion === "logo" ? "rotate-[-180deg]" : ""} text-blue-700 transition-all font-bold text-2xl`}
                          />
                        </div>

                        <AnimatePresence mode="wait">
                          {hiddenAccardion === "logo" && (
                            <motion.div
                              key="logoAccordion"
                              className="accardion "
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.1 }}
                            >
                              {/* Logo Information */}
                              <div
                                className={`bg-transparent ${themeClass.borderSecondary} p-6 rounded-md shadow-md mb-6  border-gray-200`}
                              >
                                <div className="space-y-2">
                                  {/* Logo Size */}
                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Logo Size:
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-400">
                                        <strong>Width:</strong>{" "}
                                        {orderData?.front.logo.size[0]}
                                      </span>
                                      <span className="text-sm text-gray-400">
                                        <strong>Height:</strong>{" "}
                                        {orderData?.front.logo.size[1]}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Logo Position */}
                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Logo Position:
                                    </span>

                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-400">
                                        <strong>X:</strong>{" "}
                                        {orderData?.front.logo.position[0]}
                                      </span>
                                      <span className="text-sm text-gray-400">
                                        <strong>Y:</strong>{" "}
                                        {orderData?.front.logo.position[1]}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Download Button instead of Logo Preview */}

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <a
                                      href={orderData?.front.logo.file}
                                      download={"logo.png"}
                                    >
                                      <button className="px-3 bg-blue-600 hover:bg-indigo-500 cursor-pointer py-2 text-white rounded-3xl">
                                        Download
                                      </button>
                                    </a>
                                    <img
                                      className="w-[4vw]"
                                      src={orderData?.front.logo.file}
                                      alt="logo"
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div
                        style={{
                          display: orderData?.front.text.content
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          onClick={() =>
                            openAccardion(hiddenAccardion === "" ? "text" : "")
                          }
                          className={`${themeClass.card} mb-2 flex justify-between items-center bg-blue-50 p-4 rounded cursor-pointer shadow-md hover:opacity-[0.5] transition-all duration-300 ease-in-out`}
                        >
                          <span className="text-lg font-semibold text-blue-600">
                            Text Information
                          </span>
                          <IoIosArrowDown
                            className={`${hiddenAccardion === "text" ? "rotate-[-180deg]" : ""} text-blue-700 transition-all font-bold text-2xl`}
                          />
                        </div>
                        <AnimatePresence mode="wait">
                          {hiddenAccardion === "text" && (
                            <motion.div
                              key="textAccordion"
                              className="accardion"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.1 }}
                            >
                              <div
                                className={`bg-transparent ${themeClass.borderSecondary} p-6 rounded-md shadow-md mb-6  border-gray-200`}
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Title:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.front.text.content}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Font Family:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.front.text.fontFamily}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Font Size:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.front.text.fontSize}{" "}
                                      <strong>PX</strong>
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Color:
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-500">
                                        {orderData?.front.text.color}
                                      </span>
                                      <span
                                        className={`w-[30px] h-[30px] rounded-full`}
                                        style={{
                                          backgroundColor:
                                            orderData?.front.text.color,
                                        }}
                                      ></span>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Font Weight:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.front.text.fontWeight}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Position:
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-500">
                                        <strong>X:</strong>{" "}
                                        {orderData?.front.text.position[0]}
                                      </span>
                                      <span className="text-sm text-gray-500">
                                        <strong>Y:</strong>{" "}
                                        {orderData?.front.text.position[1]}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Leter Spacing:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.front.text.letterSpacing}{" "}
                                      <strong>PX</strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Back Information */}

                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">
                      Back Information
                    </h2>
                    <div className="flex flex-col space-y-4 mb-6">
                      <div
                        style={{
                          display: orderData?.back.logo.file ? "block" : "none",
                        }}
                      >
                        <div
                          onClick={() =>
                            openAccardion(
                              hiddenAccardion === "" ? "backLogo" : "",
                            )
                          }
                          className={`${themeClass.card} mb-2 flex justify-between items-center  p-4 rounded cursor-pointer shadow-md hover:opacity-[0.5] transition-all duration-300 ease-in-out`}
                        >
                          <span className="text-lg font-semibold text-blue-600">
                            Logo Information
                          </span>
                          <IoIosArrowDown
                            className={`${hiddenAccardion === "backLogo" ? "rotate-[-180deg]" : ""} text-blue-700 transition-all font-bold text-2xl`}
                          />
                        </div>
                        <AnimatePresence mode="wait">
                          {hiddenAccardion === "backLogo" && (
                            <motion.div
                              key="backLogoAccordion"
                              className="accardion"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.1 }}
                            >
                              {/* Logo Information */}
                              <div
                                className={`bg-transparent ${themeClass.borderSecondary} p-6 rounded-md shadow-md mb-6  border-gray-200`}
                              >
                                <div className="space-y-2">
                                  {/* Logo Size */}
                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Logo Size:
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-500">
                                        <strong>Width:</strong>{" "}
                                        {orderData?.back.logo.size[0]}
                                      </span>
                                      <span className="text-sm text-gray-500">
                                        <strong>Height:</strong>{" "}
                                        {orderData?.back.logo.size[1]}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Logo Position */}
                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Logo Position:
                                    </span>

                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-500">
                                        <strong>X:</strong>{" "}
                                        {orderData?.back.logo.position[0]}
                                      </span>
                                      <span className="text-sm text-gray-500">
                                        <strong>Y:</strong>{" "}
                                        {orderData?.back.logo.position[1]}
                                      </span>
                                    </div>
                                  </div>
                                  {/* Download Button instead of Logo Preview */}

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <a href={orderData?.back.logo.file}>
                                      <button className="px-3 bg-blue-600 hover:bg-indigo-500 cursor-pointer py-2 text-white rounded-3xl">
                                        Download
                                      </button>
                                    </a>
                                    <img
                                      className="w-[4vw]"
                                      src={orderData?.back.logo.file}
                                      alt="logo"
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div
                        style={{
                          display: orderData?.back.text.content
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          onClick={() =>
                            openAccardion(
                              hiddenAccardion === "" ? "backText" : "",
                            )
                          }
                          className={`${themeClass.card} mb-2 flex justify-between items-center  p-4 rounded cursor-pointer shadow-md hover:opacity-[0.5] transition-all duration-300 ease-in-out`}
                        >
                          <span className="text-lg font-semibold text-blue-600">
                            Text Information
                          </span>
                          <IoIosArrowDown
                            className={`${hiddenAccardion === "backText" ? "rotate-[-180deg]" : ""} text-blue-700 transition-all font-bold text-2xl`}
                          />
                        </div>
                        <AnimatePresence mode="wait">
                          {hiddenAccardion === "backText" && (
                            <motion.div
                              key="backTextAccordion"
                              className="accardion "
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.1 }}
                            >
                              <div
                                className={`bg-transparent ${themeClass.borderSecondary} p-6 rounded-md shadow-md mb-6  border-gray-200`}
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Title:
                                    </span>
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      {orderData?.back.text.content}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Font Family:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.back.text.fontFamily}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Font Size:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.back.text.fontSize}{" "}
                                      <strong>PX</strong>
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Color:
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-500">
                                        {orderData?.back.text.color}
                                      </span>
                                      <span
                                        className={`w-[30px] h-[30px] rounded-full`}
                                        style={{
                                          backgroundColor:
                                            orderData?.back.text.color,
                                        }}
                                      ></span>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Font Weight:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.back.text.fontWeight}
                                    </span>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Position:
                                    </span>
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm text-gray-500">
                                        <strong>X:</strong>{" "}
                                        {orderData?.back.text.position[0]}
                                      </span>
                                      <span className="text-sm text-gray-500">
                                        <strong>Y:</strong>{" "}
                                        {orderData?.back.text.position[1]}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                                    <span
                                      className={`${themeClass.secondaryText} font-semibold`}
                                    >
                                      Leter Spacing:
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {orderData?.back.text.letterSpacing}{" "}
                                      <strong>PX</strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <div
                    onClick={() =>
                      openAccardion(hiddenAccardion === "" ? "soccer" : "")
                    }
                    className={`${themeClass.card} mb-2 mt-4 flex justify-between items-center  p-4 rounded cursor-pointer shadow-md hover:opacity-[0.5] transition-all duration-300 ease-in-out`}
                  >
                    <span className="text-lg font-semibold text-blue-600">
                      Foodball Information
                    </span>
                    <IoIosArrowDown
                      className={`${hiddenAccardion === "soccer" ? "rotate-[-180deg]" : ""} text-blue-700 transition-all font-bold text-2xl`}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {hiddenAccardion === "soccer" && (
                      <motion.div
                        key="soccer"
                        className="accardion "
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                      >
                        {/* Foodbal Information */}
                        <div className={`${themeClass.borderSecondary} bg-transparent p-6 rounded-md shadow-md mb-6  border-gray-200`}>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                              <span className={`${themeClass.secondaryText} font-semibold`}>
                                Name:
                              </span>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-500">
                                  {orderData?.soccer.name}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 p-2 border-t border-gray-300">
                              <span className={`${themeClass.secondaryText} font-semibold`}>
                                Number:
                              </span>

                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-500">
                                  {orderData?.soccer.number}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              {/* Customer Information */}
              <div>
                <h2 className="text-xl flex items-center gap-4 font-semibold mb-4 text-blue-900">
                  Customer Information{" "}
                  <IoPersonSharp className="inline-block" />
                </h2>
                <div className="flex flex-col space-y-4">
                  <div
                    className={`${themeClass.card} opacity-[0.98] shadow flex justify-between  p-4 rounded`}
                  >
                    <span className={`font-semibold ${themeClass.text}`}>
                      Phone:
                    </span>
                    <span className={themeClass.secondaryText}>
                      +{orderData?.customerInfo.phone}
                    </span>
                  </div>
                  <div
                    className={`${themeClass.card} opacity-[0.98] shadow flex justify-between  p-4 rounded`}
                  >
                    <span className={`font-semibold ${themeClass.text}`}>
                      Telegram:
                    </span>
                    <span className={themeClass.secondaryText}>
                      {orderData?.customerInfo.telegram}
                    </span>
                  </div>
                  <div
                    className={`${themeClass.card} opacity-[0.98] shadow flex justify-between  p-4 rounded`}
                  >
                    <span className={`font-semibold ${themeClass.text}`}>
                      Address:
                    </span>
                    <span className={themeClass.secondaryText}>
                      {orderData?.customerInfo.address}
                    </span>
                  </div>
                  <div
                    className={`${themeClass.card} opacity-[0.98] shadow flex justify-between  p-4 rounded`}
                  >
                    <span className={`font-semibold ${themeClass.text}`}>
                      Payment Method:
                    </span>
                    <span className={themeClass.secondaryText}>
                      {orderData?.customerInfo.paymentMethod}
                    </span>
                  </div>
                  <div
                    className={`${themeClass.card} opacity-[0.98] shadow flex justify-between  p-4 rounded`}
                  >
                    <span className={`font-semibold ${themeClass.text}`}>
                      Delivery Method:
                    </span>
                    <span className={themeClass.secondaryText}>
                      {orderData?.customerInfo.deliveryMethod}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderModal;
