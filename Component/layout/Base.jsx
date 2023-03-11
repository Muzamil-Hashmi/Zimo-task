import React, { Children } from 'react'
import Header from '../layout/Header'
import Footer  from '../layout/Footer'


export default function Base(prop) {
  return (
    <div>
        <Header/>
        {prop.children}
        {/* <Footer/> */}
      
    </div>
  )
}
