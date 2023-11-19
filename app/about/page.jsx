import React from "react";
import AboutHeader from "./components/AboutHeader";
import Styles from "./styles/style.module.css"

const page = () => {
    // throw new Error("SOmething went wrong")
  return (
    <>
      <div className={Styles.main}>
        <AboutHeader />
        <div>About page</div>
      </div>
    </>
  );
};

export default page;
