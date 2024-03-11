import React from 'react'

function Fruit({ emoji, name, price }) {
  return (
    <div>
      {emoji} {name} ${price}
    </div>
  )
}

export default Fruit