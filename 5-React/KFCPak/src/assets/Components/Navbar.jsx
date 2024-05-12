import React from 'react'
import { useContext } from "react"
import { counterContext } from "../../Context"

export default function Navbar() {
  let {count,setCount} = useContext(counterContext)

  return (
    <>
     <nav>
          <div className="logos">
            <i className="fa-solid fa-bars fa-2x"></i>
            <img src="src/assets/Media/Logo.png" alt="Logo" />
          </div>
          <div className="nav-btns">
            <div className="nav-btn1">
              
                <button className='btn'>
                  <img src="src/assets/Media/Biker.png" alt="Biker" width={"25px"}/>DELIVERY
                </button>
              
            </div>
            <div className="nav-btn2">
              
                <button className='btn'>
                  <img src="src/assets/Media/Bag.png" alt="Biker" width={"25px"}/>PICK UP
                </button>
              
            </div>
          </div>
          <div className="resetBtn">

            <button onClick={()=>setCount(count > 0 ? count - 1 : count )}>DECRE</button>

            <i className="fa-solid fa-cart-shopping"><p>{count}</p></i>

            <button onClick={() => setCount(0)}>RESET</button>

          </div>
        </nav>
    </>
  )
}
