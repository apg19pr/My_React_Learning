import { render } from '@testing-library/react';
import React from 'react'
import Fruits from './Fruits';
import ParentComponent from './ParentComponent';

export default function ConditionalComponent() {
  const display = true; // ConditionalComponent
  // if (display) {
  //   return (
  //     <ul className='floating-list'>
  //       <li><b>Conditional Component</b> </li>
  //     </ul>
  //   );
  // } else {
  //   return (
  //     <ul className='floating-list'>
  //       <li>💻Code Everyday!</li>
  //     </ul>
  //   );
  // }


  // if (display) {
  //   return (
  //     <>
  //       <b>---------------Conditional Component---------------</b>
  //       <Fruits />
  //     </>
  //   )

  // } else {
  //   return (
  //     <>
  //       <b>---------------Conditional Component---------------</b>
  //       <ParentComponent />
  //     </>
  //   )
  // }

  // let message;
  // if (display) {
  //   message = <b>This is Conditional Component 1</b>
  // } else {
  //   message = <b>This is Conditional Component 2</b>
  // }
  // return message

  return display ? <b>Conditional Component 1</b> : <b>Conditional Component 2 </b>;
  // return display ? <Fruits /> : <ParentComponent /> ;
}
