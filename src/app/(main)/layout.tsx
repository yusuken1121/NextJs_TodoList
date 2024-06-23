import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <div className="bg-indigo-300">Side menu</div>
      <main className="bg-red-300 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
