import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Country About Page",
  description: "Country About Page Created BY MIhir",
};

const page = () => {
  return (
    <>
      <Link href="/about">About Page Link</Link>
      
      Country About page
    </>
  );
};

export default page;
