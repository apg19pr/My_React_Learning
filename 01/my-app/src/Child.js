import React from 'react'

export default function Child(props) {
  return (
    <div>
      <ol>
        <li>------ Child Component------</li>
        <li>parents data inside child:- <b>{props.data}</b></li>
      </ol>
    </div>
  )
}
