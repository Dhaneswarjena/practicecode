import React from 'react'

const Task = ({input,textarea,i,deletetask}) => {
  return (
    <div className='taskdiv'>
    <div style={{width:'95%'}}>
        <p>{input}</p>
        <span>{textarea}</span>
    </div>
        <div className='btndiv' style={{margin:'auto'}}>
            <button className='taskbtn' onClick={()=>deletetask(i)}>-</button>
        </div>

    </div>
  )
}

export default Task