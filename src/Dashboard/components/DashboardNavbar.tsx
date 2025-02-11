import { themeVariables, useTheme } from '../../Context/Theme';
import { MoonIcon, Sun, UserCircle2Icon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const navigate = useNavigate()
  const {theme, toggleTheme} = useTheme()
  const themeClass = themeVariables[theme]
  return (
    <nav className={` ${themeClass.card} ${themeClass.text} shadow-md`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center font-bold text-3xl cursor-pointer" onClick={()=> navigate('/dashboard')}>
            Master Print
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 ${themeClass.buttonSecondary} rounded-full w-10 h-10`}
            >
              {theme == 'light' ? <Sun className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              
            </button>
            <div className="ml-3 relative">
              <select className={`appearance-none ${themeClass.buttonSecondary} rounded-md py-2 pl-3 pr-8 text-base focus:outline-none `}>
                <option>Rus</option>
                <option>O'zbek</option>
                <option>Qaraqalpaq</option>
              </select>
            </div>
            <div className="ml-3 relative">
              <button className={`flex items-center text-sm p-2 ${themeClass.buttonSecondary} rounded-full w-10 h-10 focus:outline-none`}>
                <UserCircle2Icon className="h-8 w-8 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

