import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto max-w-5xl px-6">{children}</div>
    </>
  );
}

export default MainContainer;
