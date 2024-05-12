import React from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Carousel from './assets/Components/Carousel'
import CardsSec1 from './assets/Components/CardsSec1'
import CardsSec2 from './assets/Components/CardsSec2'
import CardsSec3 from './assets/Components/CardsSec3'
import { useState } from 'react'
import { counterContext } from "./Context";


export default function App() {
  let [count, setCount] = useState(0)

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
      
      <header>
       <Navbar />
      </header>

      <main>
        <Carousel />
        <CardsSec1 />
        <CardsSec2 />
        <CardsSec3 />

      </main>
    </counterContext.Provider>
    </>
  )
}
