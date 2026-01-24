import type { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const AuthPageLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      {children}
    </div>
  );
};
