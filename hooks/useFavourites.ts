
import {useEffect, useState} from 'react';

export function useFavourites(){
    const [favourites,setFavourites]= useState(JSON.parse(localStorage.getItem('favourites'))||[]);
    
    useEffect(() => {
        try {
          const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
          if (Array.isArray(storedFavourites)) {
            setFavourites(storedFavourites);
          }
        } catch (error) {
          console.error("Error loading favourites from localStorage:", error);
        }
      }, []);
    
    
    useEffect(function(){
     
        try {
            localStorage.setItem("favourites", JSON.stringify(favourites));
          } catch (error) {
            console.error("Error saving favourites to localStorage:", error);
          }
    },[favourites])
    
    
    function toggleFav(word: string):void {
        setFavourites((prevFavourites) =>
          prevFavourites.includes(word)
            ? prevFavourites.filter((f) => f !== word)
            : [...prevFavourites, word]
        );
      }
    
    
    
    return {favourites,toggleFav}
}