'use client';

import { useSearchParams } from "next/navigation";

function SearchParam() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")
  

  
  // Example Usage

    
  return   <h1 style={{fontFamily:"Bellefair"}}  className="italic tracking-wide text-2xl p-4" >search results for {query}...</h1>
}

export default SearchParam;
