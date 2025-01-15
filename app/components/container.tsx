import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto max-w-7xl px-6 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
