'use client';
import React from "react";

function Error({ error }:{error:Error}) {
    return <div className=" absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%]">
        <h1 style={{fontFamily:"Bellefair"}} className="text-3xl">
          
            Something Unexpected Happened
        </h1>
        <p>  {error.message}</p>
    
    </div>;
}

export default Error;
