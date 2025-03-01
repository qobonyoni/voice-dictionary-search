import Link from 'next/link'

export default function Meanings({meanings}) {
    return(
        <>
        {meanings.map((m,index) => (    
             <div key={index} className="relative p-8 border border-secondary rounded-xl bg-white dark:bg-mainComponent">
           
                    <h2 style={{ fontFamily: "Bellefair" }} className="absolute top-0 translate-y-[-50%] bg-white dark:bg-mainComponent rounded px-2 text-2xl tracking-wide ">{m?.partOfSpeech}</h2>
                      <ul className=" grid gap-4">
                         {m?.definitions.map((definition, index) => (
                         <li className="border-l border-secondary pl-4" key={index}>
                             <p className="relative">
                             {definition.definition}</p>
                            <p className="text-accent">{definition.example}</p></li>))}
                         </ul> 
           
                         {m?.synonyms.length>0 &&   
                         <div className="flex flex-wrap gap-2 pl-4 mt-4">
                             Synonyms: {m.synonyms.map((s,index) => <Link className="text-secondary" href={`/word/${s}-0`} key={index} >{s}</Link>)}
                          </div>  } </div> 
    
        ))
  
    }
        
        
        </>)}
 





      
