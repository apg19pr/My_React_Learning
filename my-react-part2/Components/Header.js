"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'




function Header(props) {
  console.log("props from Header")
  console.log(props)
  const [num, setNum] = useState("90")
  return (
    <header className='p-3 bg-red-300'>
      <span>Header js</span>
      <Navbar num={num} />
      <div>From Header.js  {props.num}</div>

    </header>
  )
}

export default Header