import { ErrorMessages, TUser } from '../utils/types'
import { themeVariables, useTheme } from '../Context/Theme'
import React from 'react'
import CustomInput from '../UI/Input'
import Input from 'react-phone-number-input'
import "react-phone-number-input/style.css";


interface TRegister {
    userData: TUser,
    setUserData: (data: TUser) => void,
    errorMessages: ErrorMessages
}

export const Register:React.FC<TRegister> = ({userData, setUserData, errorMessages}) => {
    const {theme} = useTheme()
    const themeClass = themeVariables[theme]

  return (
    <div className="rounded-md flex_col justify-center">
        <div className="flex_center flex-col md:flex-row gap-2">
            <CustomInput 
                placeholder="Full Name" 
                className="w-full"
                label="To'liq Ism-Familya" 
                required={true} 
                id="full-name-register" 
                type='text'
                value={userData.fullName} 
                onChange={(e) => setUserData({...userData, fullName: e.target.value})} />
            <CustomInput 
                placeholder="@user" 
                className="w-full" 
                label="Telegram Username" 
                required={true}
                id="telegram-register" 
                bottom_label={errorMessages.telegramUsername}
                type='text' 
                value={userData.telegramUsername} 
                onChange={(e) => setUserData({...userData, telegramUsername: e.target.value})} />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-2 w-full">
            <div className='w-full flex-col'>
                <label>Telefon Raqam</label>
                <Input
                    international
                    countryCallingCodeEditable={false} // Disable editing the country calling code
                    defaultCountry="UZ" // Set the default country to Uzbekistan
                    value={userData.phone}
                    flags={undefined}
                    className={`h-10 flex-1 rounded-md focus:outline-0 border ${themeClass.input} px-3 custom-phone-input ${errorMessages.phone && 'error_input'}`}
                    onChange={(value) => setUserData({ ...userData, phone: value || "" })}/>
                <label className={`text-xs ${!errorMessages.phone && 'opacity-0' } text-red-400`}>{errorMessages.phone || "a"}</label>
            </div>
            <CustomInput 
                placeholder="Password" 
                className="w-full"
                label="Parol" 
                required={true}
                id="password-register"
                type='password'
                value={userData.password} 
                onChange={(e) => setUserData({...userData, password: e.target.value})} />
        </div>
        <CustomInput 
            placeholder="A.Dosnazarov 12" 
            className="w-full" 
            label="Manzil"
            required={true} 
            id="address-register" 
            type='text'
            value={userData.address} 
            onChange={(e) => setUserData({...userData, address: e.target.value})} />
        <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className='flex-1'>
                <label htmlFor="Address">Yetkazib berish turi</label>
                <select
                    required
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${themeClass.input} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                    value={userData.deliveryOption}
                    onChange={(e) => setUserData({...userData, deliveryOption: e.target.value as "DELIVERY" | "PICKUP"})}>
                        <option value="DELIVERY">Yetkazib berish</option>
                        <option value="PICKUP">Olib Ketish</option>
                </select>
            </div>
            <div className='flex-1'>
                <label htmlFor="Payment Pethod">To'lov turi</label>
                <select
                    required
                    className={`appearance-none relative block w-full px-3 py-2 border ${themeClass.input} placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                    value={userData.paymentMethod}
                    onChange={(e) => setUserData({...userData, paymentMethod: e.target.value as "CARD" | "CASH"})}>
                        <option value="">To'lov turi</option>
                        <option value="CARD">Karta Bilan</option>
                        <option value="CASH">Naqd pul bilan</option>
                </select>
            </div>
        </div>
    </div>
  )
}
