import React, { memo, useMemo } from 'react'
const Funcallback = ({powfun}) => {
   const input=useMemo(()=>powfun(5),[powfun])
  return (
    <div>
    <h1>{input}</h1>
        {input?'user alredy taken':'user not availlable'}
    </div>
  )
}

export default memo(Funcallback)