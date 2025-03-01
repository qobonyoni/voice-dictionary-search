import React from "react";

type Props = {
  children: React.ReactNode;
}

function ButtonWrapper({children}:Props) {
  return <div className="container mx-auto px-4 max-w-[768px] ">
{children}
  </div>
}

export default ButtonWrapper;
