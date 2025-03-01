
import React from "react";
import  Form from 'next/form'
import SearchButton from "./SearchButton";
import { redirect } from "next/navigation"

async function searchWord(formData: FormData) {
  'use server'
    
    const query = formData.get("query");
  if (!query) return;
    
    redirect(`/search?query=${query}`)
    

    
  }



 function SearchInput() {
  

  return   <Form action={searchWord} className="group relative w-full   rounded-full overflow-hidden bg-white border-2 border-secondary">
            
     
  <label htmlFor="search" className="sr-only">Search</label>
      <input className="h-full w-full p-4 bg-inherit placeholder:text-accent text-inherit outline-none dark:text-black " id="search" type="text"
          name="query" placeholder="Search" />
<SearchButton/>
  </Form>
}

export default SearchInput;
