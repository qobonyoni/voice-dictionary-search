import fetchWord from "@/lib/search";
import ResultList from '@/components/Main/ResultList'
import React, { Suspense } from "react";
import SearchParam from "@/components/Main/SearchParam";
import DefinitionError from '@/components/Main/DefinitionError'
interface Props{
    searchParams: Promise<{ query: string }> 

}




async function Page({ searchParams }: Props) {
    

    const results = await fetchWord((await searchParams).query)
    // const query = await searchParams.query
 
    
 
    
    return <Suspense fallback={<h1>Loading</h1>}>
            
    
    <main className="container mx-auto max-w-[768px]  h-full flex flex-col ">
       
      <SearchParam/>
        <div className="h-full flex flex-col relative">
            {results.length > 0 ? <ResultList results={results}/>:<DefinitionError {...results}/>}
        </div>
  </main>
        </Suspense>
}

export default Page;

