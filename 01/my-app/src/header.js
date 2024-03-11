import React from 'react'
// import PropTypes from 'prop-types'

function Header(props) { // prop passed as object
  console.log("printing props", props)
  return (
    <div>
      <h1>Hello {props.name} from {props.city}, This is Header</h1>
      <p>props having array {props.arr}</p>
      {/* <h2>props having object {props.object.name1}</h2> */}
    </div>
  )
}

// Header.propTypes = {}

Header.defaultProps = {
  name: "Default Name",
  city: "Default City",
  arr: [1, 2, 3, 4, "DefaultArray"]

}
export default Header
