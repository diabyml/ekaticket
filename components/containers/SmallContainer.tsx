import React from "react";

function SmallContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto max-w-lg px-6 ">{children}</div>
    </>
  );
}

export default SmallContainer;
