import React from "react";
import SelectLoaction from "./components/SelectLoaction";
import { cookies } from "next/headers";
import { getCookie } from "../lib/cookie-util";


const page = () => {
  // const cookieStore = cookies();
  // const coursecountryId = cookieStore.get("course_country_id").value

  const coursecountryId = getCookie("course_country_id").value

  console.log("coursecountryId",coursecountryId)

  return (
    <>
      <SelectLoaction />
      <h1>{coursecountryId}</h1>
      <h1>Blog page</h1>
    </>
  );
};

export default page;
