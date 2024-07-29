import React, { useEffect, useState } from "react"
import './desserts.css'
import Data from "../Data"

export default function Desserts({selected, setSelected, count, setCount}){
    
    // useEffect(()=>{
    //     getDessert()
    // },[])
    
    const getDessert = (id) =>{
        Data.map((item)=>{
            if(item.id === id) {
                // setCount(prev=>({...prev,count: item.count+=1}))
               setSelected([...selected,item])}
            }
        
        )
    }
    let mainWidth = window.innerWidth
    return(
        <div className="desserts__container">
           
           {Data.map((item)=>{
            
            return <div onClick={()=>{getDessert(item.id)}}
                        key={item.id}
                        className="items">

                        <div 
                            // style={{backgroundImage:`url(${mainWidth > 470 ? item.image.desktop : item.image.mobile})`, objectFit:'cover', backgroundSize:'100%',backgroundRepeat:'no-repeat'}}
                            style={{backgroundImage:`url(${item.image.desktop })`, objectFit:'cover', backgroundSize:'100%',backgroundRepeat:'no-repeat'}}
                            className="dessert__select">
                            
                        </div>

                        <div className="sec__des">
                               { item.count > 0 ? <button className="selected"><i class='bx bx-plus-circle'></i><p>{item.count}</p><i class='bx bx-minus-circle' ></i></button>
                                : <button className="dessert__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clipPath="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs>
                                </svg>
                                Add to cart</button>}
                             
                        </div>
                       
                        <div className="dessert__info">
                            <p className="name">{item.category}</p>
                            <h4 className="category">{item.name}</h4>
                            <h5 className="price">${item.price}</h5>
                        </div>

                    </div>
           })}
        </div>
    )
}