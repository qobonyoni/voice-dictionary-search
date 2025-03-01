'use client'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type SrcProp = {
  src?: string;
};

function PlayPronunciation({ src}:SrcProp) {


    const playSound = () => {
      if (!src) return;
      
      const sound = new Audio(src);
      sound.play();
    };
  
  
  return   <button  title={!src ? "No audio available" : ""} disabled={!src} onClick={playSound} className="group relative border border-transparent h-[4rem] w-[4rem] rounded-full bg-secondary disabled:bg-accent p-8 disabled:opacity-[0.25] cursor-pointer active:duration-0 duration-200 active:bg-white  ">
 
  <FontAwesomeIcon size="xl" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-active:text-secondary group-active:duration-0 duration-150 " icon={faPlay}/>
  </button> 
}

export default PlayPronunciation;

