import React, { useCallback, useMemo, useState } from 'react'
import {idmemo} from '../Utils/memo'

import Funcallback from './Funcallback'

const Home = () => {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState()
    const id=useMemo(idmemo,[]);
    const powfun=useCallback((pow=1)=>{
        return Math.random()*25*pow;
      },[])
  return (
    <div>
     <Funcallback powfun={powfun}/>
    <h2>#{id}</h2>
    <input type="text" value={show1} onChange={(e)=>setShow1(e.target.value)}/>
        <button onClick={()=>setShow(!show)}>
            {
                show?'Hide':'Enable'
            }
        </button>
        <h1>
            {
                show?'Text change':'********'
            }
        </h1>
       
    </div>
  )
}

export default Home