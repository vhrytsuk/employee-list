import React from "react";

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <aside className='p-5 lg:h-[90vh] overflow-y-auto'>{children}</aside>;
};

export default SideBar;
