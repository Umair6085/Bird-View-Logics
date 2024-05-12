import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter -- {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add
        </button>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : count )}>
          Remove
        </button>
        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
