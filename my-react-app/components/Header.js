import Link from 'next/link'
import React from 'react'
// import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header className='bg-gray-400 flex p-5 gap-2 justify-between flex-wrap'>

      <div className="logo">
        <b>{props.user?props.user : "Logo"}</b>
      </div>

      <ul className="nav-list flex gap-2 flex-wrap">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Product">Product</Link></li>
        <li><Link href="Contact">Contact</Link></li>
      </ul>
    </header>
  )
}

// Header.defaultProps = {
//   user: 'Abhishek'
// };
// Header.prototype = {
//   user: PropTypes.string
// }

export default Header