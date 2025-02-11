import { TUser,LUser } from '../utils/types'
import { Register } from '../components/Reagister'
import { themeVariables, useTheme } from '../Context/Theme'
import React, { useContext, useEffect, useState } from 'react'
import { Login } from '../components/Login'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../api/apiSlice'
import { useErrorHandler } from '../Hooks/useErrorHandler'
import SpinLoader from '../UI/SpinLoader'


export const Auth:React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const {theme} = useTheme()
    const themeClass = themeVariables[theme]
    const [login, { isLoading: loginLoading, isError: loginError }] = useLoginMutation();
    const [register, { isLoading, isError, data }] = useRegisterMutation();
    const { errorMessages, parseError, setErrorMessages } = useErrorHandler();


    const [loginUserData,setLoginUserData] = useState<LUser>({phone: "+998",password: ""})
    const [userData, setUserData] = useState<TUser>({
        fullName: "",
        telegramUsername: "",
        password: "",
        phone: "+998",
        address: "",
        paymentMethod: "CARD",
        deliveryOption: "DELIVERY",
    });


    let navigate = useNavigate()
    let {authValue} = useContext(AuthContext)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isLogin) {
                response = await login(loginUserData).unwrap();
            } else {
                response = await register(userData).unwrap();
            }

            localStorage.setItem('token',JSON.stringify(response.token))
            localStorage.setItem('userId',JSON.stringify(response.user.id))
            
            setErrorMessages({})
            navigate('/place-order')
            window.location.reload();
        } catch (error: any) {
            console.error( error.data || error.data.error || error);
            parseError(error);
        }
    };

    console.log(authValue);
    

    
  useEffect(()=>{
    if(authValue){
        navigate('/place-order')
    }
  },[navigate,authValue])
 


    return (
        <div className={`flex_center w-full md:h-[100vh] p-4 ${isLogin ? 'h-[100vh]' : ''} ${themeClass.card}`}>
            <div className={`flex-col justify-center p-5 pb-7 w-full sm:w-3/4 md:w-[50rem] ${themeClass.background}`}>
                <div className="text-center">
                    <h2 className={`my-3 text-3xl font-extrabold ${themeClass.text}`}>{!isLogin ? "Hisobingizni yarating" : "Tizimga kirish"}</h2>
                </div>
                <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
                    {isLogin ? <Login loginUserData={loginUserData} setLoginUserData={setLoginUserData} errorMessages={errorMessages} /> : <Register userData={userData} setUserData={setUserData} errorMessages={errorMessages}/>}
                    <div className="flex justify-center">
                        <p className={`text-sm ${themeClass.text}`}>{!isLogin ? "Hisobingiz bormi?" : "Yangi hisob yaratish"}</p>
                        <button type='button' className={`ml-2 text-blue-900 hover:text-blue-800`} onClick={()=> setIsLogin(!isLogin)}>{isLogin ? "Ro‘yxatdan o‘tish" : "Tizimga kirish"}</button>
                    </div>
                    {isLogin && 
                        <div className="flex justify-center">
                            <button disabled={loginLoading} type='submit' className={`w-full px-6 h-12 text-white rounded-md ${themeClass.button}`}>
                                {loginLoading ? <SpinLoader/> : "Kirish"}
                            </button>
                        </div>
                    }
                    {!isLogin && 
                        <div className="flex justify-center">
                            <button disabled={isLoading} type='submit' className={`w-full px-6 py-3 text-white rounded-md ${themeClass.button}`}>
                                {isLoading ? <SpinLoader/> : "Ro'yhatdan o'tish"}
                            </button>
                        </div>
                    }
                    <button type='button' className={`w-full px-6 py-3 rounded-md ${themeClass.borderSecondary}`} onClick={()=> navigate('/place-order')}>
                        Keyinroq
                    </button>
                </form>
            </div>
    </div>
  )
}
