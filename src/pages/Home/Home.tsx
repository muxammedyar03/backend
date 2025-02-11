import AboutBusiness from "./components/AboutBusiness";
import Navbar from "../../components/navbar";
import HeroSection from "./components/HeroSection";
import ProgramDetails from "./components/ProgramDetails";
import Catalog from "../catalog";
import ContactDetails from "./components/ContactDetails";
import { useContext } from "react";
import { ScrollContext } from "./contexts/ScrollContext";
import { useTheme,themeVariables } from "../../Context/Theme";
import WebsiteCardPage from "./components/WebsiteCardPage";
import Footer from "./components/Footer";
import { useLanguage } from "./contexts/Language";

const Home = () => {

  const ScrollContextApi = useContext(ScrollContext)
    if(!ScrollContextApi) throw new Error
    const{homeRef,aboutRef,categoryRef,contactRef} = ScrollContextApi

    const {theme} = useTheme()
    const themeClass = themeVariables[theme]  

  const { translations } = useLanguage();
  

  return (
    <section>
      <Navbar />
      {/* Hero Section */}
      <section ref={homeRef} className="bg-gray-800">
        <HeroSection lang={translations} />
      </section>

      {/* About Busines */}
      <section className={themeClass.background}>
        <AboutBusiness theme={themeClass} lang={translations} />
      </section>

      {/* Website Card */}
      <section>
        <WebsiteCardPage theme={themeClass} lang={translations}/>
      </section>

      <section ref={aboutRef} className={`${themeClass.card}`}>
        <ProgramDetails theme={themeClass} lang={translations} />
      </section>

      {/* Catalog */}
      <section ref={categoryRef}>
        <Catalog />
      </section>

      {/* Contact Details */}
      <section ref={contactRef} className={themeClass.background}>
        <ContactDetails theme={themeClass} lang={translations} />
      </section>

      {/* footer */}

      <section>
        <Footer lang={translations} />
      </section>

    </section>
  );
};

export default Home;
