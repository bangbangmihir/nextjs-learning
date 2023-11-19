import React from 'react'

export const metadata = {
    title: 'layout Page',
    description: 'layout Setting',
  }

const layout = ({children}) => {
  return (
    <>
    <h1>Home Page Header</h1>
    
    <div>{children}</div>
    <h1>Home Page Footer</h1>
    </>
  )
}

export default layout