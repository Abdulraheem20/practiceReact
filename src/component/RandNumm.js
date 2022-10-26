import React, { useState } from 'react'

const RandNumm = () => {
    const [rand, setRand] = useState([])
    const generate = ()=>{
        setRand([...rand, {id: rand.length, value: Math.floor(Math.random()*100)+1}])
    }
  return (
    <div>
        <button onClick={generate}>Add a number</button>
        <ol>
            {rand.map(itr => (
                <li key={itr.id}>{itr.value}</li>
            ))}
        </ol>
    </div>
  )
}

export default RandNumm