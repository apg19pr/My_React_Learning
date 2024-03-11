import React, { useState } from 'react'

export default function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);

  const handlelogin = () => {
    setIsLoggedIn(true);
  }
  const handlelogin2 =()=>{
    setIsLoggedIn2(true);
  }

  return (
    <div className='section'>
      <p><b>Rendering StateRendering Based on State</b> (if statements, ternary operators)</p>
      {
        isLoggedIn ? (<p><b>Welcome!</b> You successfully isLoggedIn </p>) : (
          <button onClick={handlelogin}> Log In via ternary operators</button>
        )
      }

      <p><b>Rendering StateRendering Based on State</b> (logical && operators.)</p>
      {isLoggedIn2 && <p><b>Welcome!</b> You successfully isLoggedIn2 </p>}
      {!isLoggedIn2 && <button onClick={handlelogin2}> Log In via logical && operators </button>}

    </div>
  )
}
