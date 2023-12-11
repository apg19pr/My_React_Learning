"use client"
import React, { useState } from 'react'

function Navbar(props) {
  console.log("props from nav")
  console.log(props)
  return (
    <nav className='bg-green-300 text-black '>
      <span>Navbar js</span>
      <ul className='flex flex-wrap p-3'>
        <li><a href="/">Home</a></li>
        <li><a href="../Contact">Contact</a></li>
      </ul>

      <div>From Navbar.js  {props.num}</div>
      
    </nav>
  )
}

export default Navbar