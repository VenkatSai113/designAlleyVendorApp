import { useState } from "react";
export function Increment(){
    const [price,setPrice]=useState(0)
    const [rate,setRate]=useState(0)
    const [intrest,setIntrest]=useState(0)
  const onchangePrice=(event)=>{
    setPrice(event.target.value)
  }
  const onchangeRate=(event)=>{
    setRate(event.target.value)

  }
  const onchangeIntrest=(event)=>{
    setIntrest(event.target.value)

  }

    return(
        <div>
        <h1>{price}</h1>
        <h1>{rate}</h1>
        <h1>{intrest}</h1>
        <input type="text" placeholder="price" onChange={onchangePrice}/>
        <input type="text" placeholder="Rate" onChange={onchangeRate}/>
        <input type="text" placeholder="Intest" onChange={onchangeIntrest}/>
        <button >Total</button>
        </div>
    )
}