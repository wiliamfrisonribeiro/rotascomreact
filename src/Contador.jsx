import React, { useState } from 'react'
import { useParams } from 'react-router'

const Contador = () => {
  const { n } = useParams()
  const [count, setCount] = useState(n ? n : 0)

  
  return (
    <div>
      <p>Seu Click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Contador
