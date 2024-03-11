import React from 'react'
import Fruit from './Fruit'

function Fruits() {
  // const fruits = ["Apple", "Blueberry", "Banana", "Orange", "Kiwi", "Grapes", "Peach"]

  const fruits = [
    { name: "Apple", price: 200, emoji: "🍎" },
    { name: "banana", price: 100, emoji: "🍌" },
    { name: "Orange", price: 107, emoji: "🍊" },
    { name: "PineApple", price: 510, emoji: "🍍" },
    { name: "StrawBerry", price: 140, emoji: "🍓" },
  ]
  return (
    <div className='floating-list'>
      <ul>
        {fruits.map((Element) =>
          // <li key={Element}>
          //   {Element.emoji} {Element.name} ${Element.price}
          // </li>
          <li key={Element.name}> <Fruit emoji={Element.emoji} name={Element.name} price={Element.price}/></li>
        )}
      </ul>
    </div>
  )
}

export default Fruits