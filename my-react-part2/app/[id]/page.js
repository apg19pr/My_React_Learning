"use client" // must use this is next.js 
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


function page({ params }) {

  const { id } = params;
  console.log(id);


  const [UserData, setUserData] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
    console.log(data);
    setUserData(data)
  }

  useEffect(() => {
    getUsers()
  }, [])




  return (
    <div>
      <h1>
        Name:- <b>{UserData.name}</b>
      </h1>
      <ul>

        <li>
        username :- {UserData.username}
      </li>

      <li>{JSON.stringify(UserData)}</li>
      
      
      
      
      
      </ul>

    </div>
  )
}

export default page