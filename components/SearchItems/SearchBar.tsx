import React from "react";
import Mic from "./Mic";
import SearchInput from "./SearchInput";

function SearchBar() {
    return <>
        <div className="flex items-center justify-between gap-4">
            
      <SearchInput/>
            <Mic/>
      </div>
        </>
    
      

}

export default SearchBar;







