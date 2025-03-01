'use client'
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMicrophone } from "@fortawesome/free-solid-svg-icons";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";


export default function Mic() {
    const router = useRouter();
    
    const updateSearchQuery = (query: string) => {
        router.push(`search?query=${encodeURIComponent(query)}`);
      };
    const {  startListening } = useSpeechRecognition(updateSearchQuery);


    return (
        <>
        <label htmlFor="audio search"   className="sr-only" >
            Audio Search
            </label>
       
        <button onClick={startListening} className="  text-[1rem]">
            <FontAwesomeIcon color=""   icon={faMicrophone} className="border-2 text-secondary  border-secondary   p-4 rounded-full dark:bg-mainComponent "  />
            </button>
        </>
    )
}