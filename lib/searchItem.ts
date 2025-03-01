
import { redirect } from "next/navigation"

export async function searchWord(formData: FormData) {
  'use server'
    
    const query = formData.get("query");
    if (!query) return { message: "Enter your query" }
    
    redirect(`/search?query=${query}`)
    

    
  }
