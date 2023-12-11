"use client" // must use
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const page = () => {
  const updatenumber = () => {
    console.log(numbers)
    setNumbers(100);
    console.log(numbers)
  }


  const [numbers, setNumbers] = useState(80) // [var, function] = hooks in react
  const [user, setUser] = useState('Abhishek')
  const [images, setImages] = useState([])


  useEffect(() => {
    getImage(); // useEffect auto calls the function on load
  }, [])
  
  const getImage = async () => {
    console.log("getImage");
    try {
      const url = await axios.get("https://picsum.photos/v2/list");
      const imgData = url.data;
      // console.log(url)
      // console.log(imgData)
      setImages(imgData) // must set data 
      console.log(images)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <h1 className='font-bold text-xl px-5 py-2'>Heading</h1>
      <p>the value of a is:- {numbers}</p>
      <button onClick={updatenumber} className='bg-black px-5 py-3 rounded mt-5 text-white m-2' > update</button>

      <button onClick={getImage} className='bg-black px-5 py-3 rounded mt-5 text-white m-2'>Get Images</button>
      <div className="images p-5 flex flex-wrap gap-0">

        {images.map((elm, i) => {
          return <img
            key={i}
            className="images "
            src={elm.download_url}
            alt={elm.author}
            width="300"
            height="250"
            loading="lazy"  />
        }
        )}

      </div>
    </>
  )
}

export default page