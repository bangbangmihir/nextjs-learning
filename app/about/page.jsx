"use client";
import React from "react";
import AboutHeader from "./components/AboutHeader";
import Styles from "./styles/style.module.css";
import useSWR from "swr";
import Link from "next/link";
import Script from "next/script";

const page = () => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/users",
  //   fetcher
  // );
  // const {
  //   data: todosData,
  //   error: toDOError,
  //   isLoading: TodoLoading,
  // } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher);

  // if(isLoading){
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }

  // throw new Error("SOmething went wrong")
  return (
    <>
      <Link href="/about/countryabout" target="_blank">
        Country About
      </Link>
      <div className={Styles.main}>
        {/* {TodoLoading && (
          <>
            <h1>Todo loading...</h1>
          </>
        )} */}
        <AboutHeader />
        <div>About page</div>
      </div>

      <Script
        type="text/javascript"
        src="https://www.vesselfinder.com/aismap.js"
        strategy="beforeInteractive"
        defer={false}
      />
    </>
  );
};

export default page;
