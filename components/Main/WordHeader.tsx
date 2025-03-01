'use client'
import React from "react";
import PlayPronunciation from "./PlayPronunciation";

import Favourite from "./Favourite";

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
type wordHeaderProps = {
    word: string;
    phonetics: Phonetic[];
    src?: string;
}
  {/* <WordHeader word={results?.word} phonetic={results?.phonetic} src={results?.phonetics[0]?.audio} />
         */}
function WordHeader({ word, phonetics, }: wordHeaderProps) {
    
    const pronunciation = phonetics.filter(p=> p.text)[0].text
    
    return <div className="sticky flex items-center justify-between my-2 lg:my-8">
        <div className="div">
            <h1 style={{ fontFamily: "Bella Fair, serif" }} className="text-4xl lg:text-5xl capitalize text-main dark:text-white ">{word}</h1>
        <p className="italic text-xl text-accent
            ">{pronunciation}</p>
            <Favourite word={word} />
        
            
      </div>
        <PlayPronunciation src={phonetics[0].audio} />
</div>
}

export default WordHeader;







