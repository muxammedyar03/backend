import Navbar from '../components/navbar';
import Card from '../components/Card';
import { useGetProductsQuery } from '../api/apiSlice';
import { useTheme ,themeVariables } from '../Context/Theme';
import SkeletonCard from '../UI/SkeletonCard';
import { useLanguage } from '../pages/Home/contexts/Language';
import { db } from '../database/db';

let  Catalog = () => {

const {theme} = useTheme()
const themeClass = themeVariables[theme]   
const { translations } = useLanguage();

  // const { data, error, isLoading } = useGetProductsQuery();
  const loadingArray = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className={`flex_center ${themeClass.background} py-28  min-h-[600px]`}>
      <Navbar />

      <div className="card_wrapper ">
       {db.map((cat) => (
            <Card
              className={`${themeClass.secondaryBg} ${themeClass.borderSecondary}`}
              key={cat.name}
              title={cat.name}
              imageSrc={`${cat.image}`}
              navigateTo={cat.name === 'Futbolkalarga' ? `/create/${cat.name}` : cat.name === 'Futbol uchun' ? `/clubs/${cat.name}` : '/'} 
            />)
        )
      }
      </div>


      
    </div>
  );
}

export default Catalog