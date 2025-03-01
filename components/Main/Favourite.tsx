
'use client'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {useFavourites} from '@/hooks/useFavourites'

type FavPopr= {
    word: string;
}

function Favourite({ word }:FavPopr) {
    
    const {favourites,toggleFav}= useFavourites();

   
    return (
       
        <button 
            onClick={()=>toggleFav(word)}
                
              
                
                title="toggle favourite"><FontAwesomeIcon color={`${favourites.includes(word) ? "gold" : 'gray'}`} icon={faStar} /></button>
    )
}

export default Favourite;