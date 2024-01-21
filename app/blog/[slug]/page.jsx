import { getCookie } from '@/app/lib/cookie-util';
import { getCookies } from 'cookies-next';
import { cookies } from 'next/headers';
import React from 'react'


const page = () => {
    // const cookieStore = cookies();
    // const coursecountryId = cookieStore.get("course_country_id")?.value


    

    // const coursecountryId = getCookies({ cookies }).course_country_id

    // console.log("coursecountryId",coursecountryId)


    // console.log( getCookies({ cookies }))

    const coursecountryId = getCookie("course_country_id").value

    console.log("coursecountryId",coursecountryId)

   
  return (
    <>
     <div>page</div>
    <h1>{coursecountryId}</h1>
    <h1>slug page</h1>
    </>
   
  )
}

export default page