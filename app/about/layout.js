import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <h1>About Header</h1>
        <div>{children}</div>
        <h1>About Footer</h1>
      </div>
    </>
  );
};

export default layout;
