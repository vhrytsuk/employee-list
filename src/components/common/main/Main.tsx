import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className='p-5 md:min-h-[90vh]'>{children}</main>;
};

export default Main;
