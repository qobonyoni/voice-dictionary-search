
'use client'
import { faSearch, faSync } from "@fortawesome/free-solid-svg-icons";
import { useFormStatus } from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchButton() {
    const status = useFormStatus();
  return     <button type="submit" className="absolute right-0 p-4 border-l-2 border-secondary bg-light dark:bg-mainComponent ">
      {status.pending ? <FontAwesomeIcon color={"#03d47c"} className="rotate-forever text-secondary" icon={faSync} /> :
          
  <FontAwesomeIcon color={"#03d47c"} icon={faSearch} /> }
      
    </button>
}

export default SearchButton;
