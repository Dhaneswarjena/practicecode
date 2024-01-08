import React, { useEffect } from 'react'

const useHello = (name) => {
    useEffect(()=>{
        document.title=name
    })
     
  return (
    <div>heloo</div>
  )
}

export default useHello