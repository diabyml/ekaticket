import Navbar from "@/components/navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
