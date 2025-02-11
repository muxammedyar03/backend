import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { themeVariables, useTheme } from "../Context/Theme";
import CustomInput from "../UI/Input";
import Navbar from "../components/navbar";
import PlaceOrderImage from "../components/PlaceOrderImage";
import { AuthContext } from "../Context/AuthContext";

interface Config {
  cardImage: string | undefined;
  cardName: string;
  cardPrice: number;
  deliveryMethods: string[];
  paymentMethods: string[];
}

const config : Config = {
  cardName: "Premium Membership Card",
  cardPrice: 99.99,
  deliveryMethods: ["Pickup", "Delivery"],
  paymentMethods: ["Cash", "Card", "Online"],
  cardImage: "/placeholder.svg?height=200&width=320",
}

const PlaceOrder: React.FC<Config> = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState("Pickup");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [showAddress, setShowAddress] = useState(false);
  
  const handleDeliveryMethodChange = (value: string) => {
    setDeliveryMethod(value);
    setShowAddress(value === "Delivery");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Order placed");
    if (paymentMethod === "Online") {
      navigate("/payment");
    }
  };
  const {theme} = useTheme();
  const themeClass = themeVariables[theme]    
  
  let {authValue} = useContext(AuthContext)


// useEffect(()=>{
//   if(!authValue){
//       navigate('/auth')
//    }
   
// },[navigate,authValue])

  console.log(authValue);
  
  
return (
  <div className={`poppins ${themeClass.background} ${themeClass.text}`}>
      <Navbar/>
      <div className={`container  mx-auto p-4`}>
        <div className={`${themeClass.card} mt-20 shadow-md rounded-lg p-6 max-w-4xl mx-auto`}>
          <h2 className="label font-bold mb-6">Place Order</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Card Preview</h3>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-full md:w-1/2">
                  <PlaceOrderImage ImageData={config}/>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{config.cardName}</span>
                    <span className="font-bold">${config.cardPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                    <label htmlFor="quantity">Quantity:</label>
                    <div className="flex_center">
                        <button className={`rounded-s-full flex_center w-12 h-10 ${themeClass.buttonSecondary}`} onClick={(e)=>{ setQuantity(quantity + 1), e.preventDefault()}}>+</button>
                        <p className={`w-12 flex_center h-10 border-s border-r ${themeClass.borderSecondary} ${themeClass.buttonSecondary}`}>{quantity}</p>
                        <button className={`rounded-r-full flex_center w-12 h-10 ${quantity === 1 ? 'pointer-events-none opacity-[0.5]' : 'pointer-events-auto opacity-[1]'} ${themeClass.buttonSecondary}`} onClick={(e)=>{ setQuantity(quantity > 1 ? quantity - 1 : 1), e.preventDefault()}}>-</button>
                    </div>
                  </div>
                    <div className="font-semibold">Total: ${(config.cardPrice * quantity).toFixed(2)}</div>
                </div>
                </div>
              </div>
              {!authValue && 
                <div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">User Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <CustomInput 
                          id="fullName" 
                          placeholder="Full Name" 
                          htmlFor="fullName"
                          className={`${themeClass.input} w-full`} 
                          type="tel"
                          required={true} 
                          label="Full Name"/>
                      </div>
                      <div className="space-y-2">
                        <CustomInput 
                          id="phoneNumber" 
                          placeholder="+998 90 123 4567" 
                          htmlFor="phoneNumber"
                          className={`${themeClass.input} w-full`} 
                          type="tel"
                          required={true} 
                          label="Phone Number"/>
                      </div>
                      <div className="space-y-2">
                        <CustomInput 
                          id="telegramUsername" 
                          placeholder="@user" 
                          htmlFor="telegramUsername"
                          className={`${themeClass.input} w-full`} 
                          type="text"
                          required={true} 
                          label="Telegram Username"/>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Delivery Method</h3>
                    <div className="space-y-2">
                      {config.deliveryMethods.map((method) => (
                          <div key={method} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`delivery-${method.toLowerCase()}`}
                              name="deliveryMethod"
                              value={method}
                              checked={deliveryMethod === method}
                              onChange={(e) => handleDeliveryMethodChange(e.target.value)}
                              className="form-radio"
                            />
                            <label htmlFor={`delivery-${method.toLowerCase()}`}>{method}</label>
                          </div>
                      ))}
                    </div>
                  </div>
                  {showAddress && (
                    <div className="space-y-2">
                      <CustomInput 
                        id="address" 
                        placeholder="Nukus A.Dosnazaov 42" 
                        htmlFor="DeliveryAddress"
                        className={`${themeClass.input} w-full`} 
                        type="text"
                        required={true} 
                        label="Delivery Address"/>
                    </div>
                  )}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Payment Method</h3>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className={`w-full ${themeClass.input} p-2 border rounded`}
                      >
                      {config.paymentMethods.map((method) => (
                        <option key={method} value={method}>
                        {method}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>  
              }

              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Place Order
              </button>
          </form>
        </div>
      </div>
  </div>
  );
};

export default PlaceOrder;
