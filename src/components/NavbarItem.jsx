import { useLanguage } from '../pages/Home/contexts/Language'
import { themeVariables, useTheme} from '../Context/Theme'
import { BiCategory } from 'react-icons/bi'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlinePhone } from 'react-icons/md'
import { ScrollContext } from '../pages/Home/contexts/ScrollContext'
import { useContext} from 'react'

export const NavbarItem = () => {
    const { theme } = useTheme();
    const themeClass = themeVariables[theme];
    const { translations } = useLanguage();
    const ScrollContextApi = useContext(ScrollContext);
    const { homeScroll, aboutScroll, categoryScroll, contactScroll } = ScrollContextApi;
    const navbarItems = [
        { click: homeScroll,  title: translations.navbar.home,  icon: <IoHomeOutline className=" hidden xl:inline-block text-lg" />,},
        { click: aboutScroll,  title: translations.navbar.about, icon: <IoMdInformationCircleOutline className="hidden xl:inline-block text-lg" />},
        { click: categoryScroll,  title: translations.navbar.category, icon: <BiCategory className="hidden xl:inline-block text-lg" />}
    ]

  return (
    <div className={`items-center xl:ml-20 justify-center gap-6 lg:gap-6 ${window.location.pathname === "/" ? "hidden md:flex" : "hidden"}`}>
        {navbarItems.map((item) => (
            <button key={item.title} onClick={item.click} className={`flex_center gap-2 text-xs lg:text-sm font-semibold transition-all cursor-pointer ${themeClass.text} opacity-80 hover:opacity-100`}>
            {item.title}
            {item.icon}
            </button>
        ))}
        <p onClick={contactScroll} className={`flex_center gap-2 text-xs lg:text-sm font-semibold transition-all cursor-pointer ${themeClass.text} opacity-80 hover:opacity-100`}>
            {translations.navbar.contact}
            <MdOutlinePhone className="hidden xl:inline-block text-lg" />
        </p>
      </div>
  )
}
