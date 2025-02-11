import CustomInput from '../UI/Input'
import { themeVariables, useTheme } from '../Context/Theme'
import Input from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import {ErrorMessages, LUser} from '../utils/types'
import React from 'react'

interface TLogin {
  loginUserData: LUser,
  setLoginUserData: (data: LUser) => void,
  errorMessages: ErrorMessages
}

export const Login:React.FC<TLogin> = ({loginUserData,setLoginUserData, errorMessages}) => {
      const {theme} = useTheme()
      const themeClass = themeVariables[theme]
  return (
    <div className="rounded-md flex_col justify-center">
      <div>
        <label htmlFor="Phone Number">Telefon Raqam</label>
        <Input
            international
            countryCallingCodeEditable={false}
            defaultCountry="UZ"
            value={loginUserData.phone}
            flags={undefined}
            className={`h-12 flex-1 rounded-md focus:outline-0 border ${themeClass.input} px-3 custom-phone-input ${errorMessages.phone && 'error_input'}`}
            onChange={(value) => setLoginUserData({ ...loginUserData, phone: value || "" })}
            />
          <label className={`text-xs ${!errorMessages.phone && 'opacity-0' } text-red-400`}>{errorMessages.phone || "a"}</label>
      </div>
      <CustomInput 
          placeholder="password" 
          className={`w-full h-12`} 
          label="Password"
          bottom_label={errorMessages.password}
          required={true} 
          htmlFor="" 
          id="telegram-register" 
          type='password' 
          value={loginUserData.password} 
          onChange={(e) => setLoginUserData({...loginUserData, password: e.target.value})} 
          />
    </div>
  )
}
