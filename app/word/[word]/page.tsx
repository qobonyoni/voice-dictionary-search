import React from "react";
import DictionaryEntry from "@/components/Main/DictionaryEntry";
import ButtonWrapper from "@/components/Main/ButtonWrapper";
import Link from "next/link";
import fetchWord from '@/lib/search'
 

    async function Page({
        params,
      }: {
        params: Promise<{ word: string }>
      }) {
    
        const { word } = await params;
const search =word.includes('-')? word.split('-')[0]:word;

        const results = await fetchWord(search);
        const resultsToDisplay= results[0]
   

    return <main>
        <ButtonWrapper>
            <Link className="py-1 px-4 bg-accent rounded" href={'/'}>Back</Link>
        </ButtonWrapper>
        <DictionaryEntry results={resultsToDisplay} />
       
    </main>
}

export default Page;
