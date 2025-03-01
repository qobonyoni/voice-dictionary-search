

 import Source from "./Source";

import Meanings from './Meanings'
import WordHeader from "./WordHeader";

type License = {
  name: string;
  url: string;
};

type Phonetic = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
};



type ResultsProps = {
  results: {
  
  word: string;
  phonetic?: string;
    meanings: string[];
    phonetics: Phonetic[];
    audio: string;
    sourceUrls?: string[];
    
}
}

function DictionaryEntry ({results}:ResultsProps){
  
  const {meanings}= results

    return (
      <div className="container mx-auto max-w-[768px] p-4 grid gap-8">
        
        <WordHeader {...results}  />
        <>
        
        {meanings.length>0 && <Meanings meanings={meanings}/>} 
        </>
        <Source url={results?.sourceUrls[0]} />
      </div>
    );
  };
  
  export default DictionaryEntry;