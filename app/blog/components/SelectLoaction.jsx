"use client"
import React from 'react'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export const country = [
    {name:"USA",id:231},
    {name:"IN",id:101},
    {name:"UAE",id:321},
]


const SelectLoaction = () => {

    const router = useRouter();

   

    const handleCookie= (id,name) =>{
        setCookie('course_country_id', id);
        router.push(`/blog/${name}`)
    }



  return (
    <>

    {
        country && country.map((Item)=>(
            <>

            <button onClick={()=>handleCookie(Item.id,Item.name)}>{Item.name}</button>
            </>
        ))
    }



    
    
    </>
  )
}

export default SelectLoaction