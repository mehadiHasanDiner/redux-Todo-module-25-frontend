import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="mx-auto h-screen w-full max-w-7xl">{children}</div>;
};

export default Container;
