import React, { ReactNode } from "react";

interface PSContainerProps {
  children: ReactNode;
  className?: string;
}

const PSContainer = ({ children, className = "" }: PSContainerProps) => {
  return (
    <div className={`container mx-auto px-5 ${className}`}>{children}</div>
  );
};

export default PSContainer;