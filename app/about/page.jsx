"use client"
import React from "react";
import AboutHeader from "./components/AboutHeader";
import Styles from "./styles/style.module.css";
import useSWR from 'swr';


const fetcher = (url) => fetch(url).then((res) => res.json());


const page = () => {

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
  const { data:todosData, error:toDOError, isLoading:TodoLoading } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher);




  // if(isLoading){
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }

  


  console.log("data",data)
    // throw new Error("SOmething went wrong")
  return (
    <>
      <div className={Styles.main}>
        {
          TodoLoading && <><h1>Todo loading...</h1></>
        }
        <AboutHeader />
        <div>About page</div>
      </div>
    </>
  );
};

export default page;
