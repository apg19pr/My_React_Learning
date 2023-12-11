"use client" // must use this is next.js 
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from './../Components/Header'


function page() {
  const [UserName, setUserName] = useState('Abhishek');
  const [UserData, setUserData] = useState([]);
  const [num, setNum] = useState(90);

  const getUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
    setUserData(data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
        <Header num = {num} />

      <div className="px-5">
        <h1 className='my-3  text-2xl font-bold'>This is Homepage </h1>
        <a href="/Contact" className='mx-2'>Contact</a>
        <a href="/" className='mx-2'>Home</a>
        <form action="" className=''>
          <label htmlFor="userTxtInput"></label>
          <input id="userTxtInput" className='my-5 border-zinc-800 rounded py-2 px-2 text-black' type="text" value={UserName}
            onChange={(e) => {
              setUserName(e.target.value) // must add this to make input editable 
            }} />
        </form>
        <p className=" my-3 text-xl font-bold">
          {UserName}
        </p>

        <button className='bg-blue-800 rounded text-white px-5 py-2 font-bold' onClick={getUsers}>Data (Dynamic Routing)</button>

        <div className="p-2 bg-slate-100 mt-5 text-neutral-900">
          <ul>
            {UserData.map((elm, i) => {
              return <li key={elm.id}>
                {elm.name} --- <a href={`/${elm.id}`}><b>Read More</b></a>
              </li>

            })}
          </ul>
        </div>

      </div>



    </>
  )
}

export default page