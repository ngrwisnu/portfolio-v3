import React, { ReactNode } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mb-20 flex w-full flex-col items-center">{children}</main>
  );
};

export default MainContent;
