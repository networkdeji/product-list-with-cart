import React, { useState } from "react"
import './checkout.css'
import empty from '../assets/images/illustration-empty-cart.svg'
import Confirmation from "../confirmation/Confirmation"

export default function Checkout({selected, setSelected, count, setCount, setDisplay, setOrder}){

    let arr = []
    
    for(let i=0; i< selected.length; i++){
        arr.push(selected[i].price)
    }

    const accumulate = (first, second) =>{
        return first + second
    }

    const removeitem = (id) =>{
         // Find the index of the first item with the matching ID
    const index = selected.findIndex(item => item.id === id)
    if (index !== -1) {
      // Create a new array without the found item
      const newItems = [...selected]
      newItems.splice(index, 1) // Remove the item at the found index
      setSelected(newItems)
    }
    
    
    
    }

    const uniqueObjectsWithCount = selected.reduce((acc, obj) => {
        if (acc[obj.id]) {
          acc[obj.id].count += 1
        } else {
          acc[obj.id] = { ...obj, count: 1 }
        }
        return acc
      }, {});
    
    const uniqueObjectsArray = Object.values(uniqueObjectsWithCount);
    

    const next = () =>{
        setCount(arr.reduce(accumulate,0))
        setOrder(uniqueObjectsArray)
        
    }
    return(
        <div className="checkout__con" >
            <h1>Your Cart({selected.length})</h1>

            {selected.length == 0 ? <div className="checkout__empty">
                <img src={empty}/>
                <p>Your added items will appear here</p>
            </div> :

            <div className="main__order">

               { uniqueObjectsArray.map((items)=>{
                return < div key={items.id}>
                <div 
                    
                    className="checkout__populated">

                    <div className="populated__info">
                        <h5 className="pop__category">{items.name}</h5>
                        <div className="pop__details">
                            <p className="pop__qty">{items.count}x</p>
                            <p className="pop__base">@${items.price}</p>
                            <p className="pop__cummulate">${items.price * items.count}</p>
                        </div>
                    </div>

                    <div onClick={()=>removeitem(items.id)}
                    className="remove__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
                    </div>
                    
                </div>
                <hr />
               </div>
               })}

                {<div className="pop__total">
                    <p>Order Total</p>
                    <h2>${arr.reduce(accumulate,0)}</h2>
                </div>}
                
                <div className="pop__message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
                    <p>This is a <span>carbon-neutral</span> delivery</p>
                </div>

                <button onClick={()=>{setDisplay(true); next()}}
                className="confirm__btn">Confirm Order</button>


            </div>}
        </div>
    )
}