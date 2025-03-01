'use client'
import Link from "next/link";

type Definition = {
    definition: string;
  };
  
  type Meaning = {
    partOfSpeech: string;
    definitions: Definition[];
  };
  
  type WordResult = {
    word: string;
    meanings: Meaning[];
  };
  
  type ResultsType = {
    results: WordResult[];
  };


export default  function ResultList({results}:ResultsType) {
    return (
       
    <div className="flex flex-col gap-2  p-4">{
            results.map((word, index: number) => {
         
           return( <Link className="border border-secondary rounded w-full bg-white p-4 dark:bg-mainComponent shadow hover:opacity-[80%] duration-150 flex items-center gap-2" href={`/word/${word.word}-${index}`} key={index}>
               <span className="capitalize font-bold ">{word.word} 
               </span>
               
               {"-"}
               <span className="italic text-accent">{word.meanings[0].definitions[0].definition }</span>
        </Link>)
    })
    }</div>

)}

