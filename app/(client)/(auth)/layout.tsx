import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full  flex items-center justify-center pt-12">
      {children}
    </div>
  );
}

export default Layout;
