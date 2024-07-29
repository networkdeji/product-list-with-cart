import { useState } from 'react'
import './App.css'
import Desserts from './desserts/Desserts'
import Checkout from './checkout/Checkout'
import Confirmation from './confirmation/Confirmation'

function App() {

  const [display, setDisplay] = useState(false)
  const [count, setCount] = useState('')
  // checkout array 
  const [selected, setSelected] = useState([])

  // information of all ordered items
  const [order, setOrder] = useState([])

  return (
    <div>
    <h1 className='heading'>Desserts</h1>
    <div className="container">
      {/* <h1>Desserts</h1> */}
     {display ? null : <>
     <Desserts selected={selected}
                setSelected={setSelected}
                count={count}
                setCount={setCount}/>


      <Checkout  selected={selected}
                setSelected={setSelected}
                count={count}
                setCount={setCount}
                setDisplay={setDisplay}
                setOrder={setOrder}/>
      </>          }

    </div>
    {display ? <Confirmation 
                  count={count}
                  order={order}
                  selected={selected}
                  setSelected={setSelected}
                  setDisplay={setDisplay}/> : null}
    </div>
  )
}

export default App
