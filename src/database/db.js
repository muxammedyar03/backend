import hoodie from '/images/hoodie.webp'
import tShirt from '/images/Black.png'
import { ClubImages } from '../utils/Images'

export const db = [
    {id: 1, name: 'Futbol uchun', image: ClubImages.ManchesterCity.front,
        clubs: [
            {id: 1, name: "Real Madrid", image: {front: ClubImages.RealMadrid.front, back: ClubImages.RealMadrid.back}},
            {id: 2, name: "Manchester City", image: {front: ClubImages.ManchesterCity.front, back: ClubImages.ManchesterCity.back}},
            {id: 3, name: "Juventus Club", image: {front: ClubImages.Juventus.front, back: ClubImages.Juventus.back }},
        ]
},
    {id: 7, name: 'Futbolkalarga', image: tShirt, clubs: null},
    {id: 8, name: 'Hoodielarga', image: hoodie, clubs: null}
]