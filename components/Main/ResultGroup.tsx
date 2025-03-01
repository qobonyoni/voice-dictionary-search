import React from "react";

type Props = {
  children: React.ReactNode
}

export default function ResultGroup({children}:Props) {
    return <div className="relative p-4 border border-secondary rounded-xl">
  
        
      {children}
  </div>
}
