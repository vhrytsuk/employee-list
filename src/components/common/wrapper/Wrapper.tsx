import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => {
  return (
    <div className='max-w-screen-2xl mx-auto p-6' {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
