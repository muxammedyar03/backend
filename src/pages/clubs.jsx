import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar';
import { db } from '../database/db';
import Card from '../components/Card';
import { useTheme, themeVariables } from '../Context/Theme';

export default function Clubs() {
    const param = useParams()
    const clubs = db.filter(_c => _c.name.toLowerCase() === param.id.toLowerCase())
    
    let {theme} = useTheme()
  return (
    <div className={`w-full h-[100vh] pt-24  ${themeVariables[theme].background} `}>
        <Navbar/>
        <div className='card_wrapper'>
          {clubs[0]?.clubs.map(club => (
            <Card key={club.id} title={club.name} imageSrc={club.image.front} navigateTo={`/create/${club.name}`}/>
          ))}
        </div>
    </div>
  )
}