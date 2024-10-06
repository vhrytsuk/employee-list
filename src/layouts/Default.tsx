import { type FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
