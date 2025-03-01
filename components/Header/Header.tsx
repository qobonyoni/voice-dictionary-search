import React from "react";
import Logo from "./Logo";
import Controls from "./Controls";

function Header() {
    return <header className="fixed top-0 w-screen  bg-mainComponent dark-bg-main z-[500]">
      {/* container mx-auto p-4 max-w-[768px] fixed
    w-screen */}
      <div className="container mx-auto max-w-[768px] p-4">
        
    
      
      <div className="flex justify-between items-center ">
            
        <Logo />
        <Controls/>
        </div>
        </div>
        
  </header>
}

export default Header

