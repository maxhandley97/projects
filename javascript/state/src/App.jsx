import React, {useState} from 'react'

const App = () => {
  // let count = 0

  let [count, setCount] = useState(0)
  console.log(count)
  return (
    <>
      <h1>State</h1>
      <p>You have clicked {count} times</p>
      <button onClick={() => console.log(setCount(count + 1))}>Click Me!</button>
    </>
  )
}

export default App