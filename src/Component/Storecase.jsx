import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addval,Showdata } from './reduceslice'
const Storecase = () => {
    const dispatch=useDispatch()
    const selval=useSelector((state)=>state.counter)
    const addvaltext=()=>{
        dispatch({
            type:addval,
            payload:'Dhaneswar Jena'
        }
        )
    }
  return (
    <div>
    <input type={'text'} value={selval.inputval}/>
    <p>{selval.value}</p>
        <button onClick={addvaltext}>Click</button>
        <button onClick={()=>dispatch({type:Showdata})}>Click</button>
    </div>
  )
}

export default Storecase