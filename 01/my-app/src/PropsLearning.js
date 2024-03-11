import React from 'react'
// import PropTypes from 'prop-types'

function PropsLearning(props) {

  return (
    <div className='floating-list'>
      <ul>
        <li>Props as Array:- {JSON.stringify(props.arrayProp)} or {props.arrayProp}</li>
        <li>Props as Object:- {JSON.stringify(props.objectProp)} </li>
        <li>Props as Number:- {props.numberProp}</li>
        <li>Props as Function:- {props.funcProp()}</li>
        <li>Props as String:- {props.stringProp}</li>
      </ul>
    </div>
  )
}

// props.propTypes = {}

export default PropsLearning








