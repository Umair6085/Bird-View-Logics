import React, { useContext } from 'react'
import { counterContext } from '../../Context'

export default function CardSec3(props) {
  let {count, setCount} = useContext(counterContext)
  return (
    <>
    <div className="card">
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <i className="fa-regular fa-heart"></i>
        <img src={props.src} alt="Card-1" width={"250px"} />
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <h3>Rs {props.price}</h3>

        <button className='addToCart' onClick={()=>setCount(count++)}>+ ADD TO BUCKET</button>
    </div>
    </>
  )
}
