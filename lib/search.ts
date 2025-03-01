

export default async function fetchWord(searchTerm: string) {
    try {
        
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        const word = await res.json();
        return word;
    }
    catch  {
        throw new Error(`Failed to fetch the definition of ${searchTerm}`)
        
    }
   
    
}
    

    
 

    
