import React from 'react'
import '../Component/Header.css'
import { Link, useNavigate,useParams } from 'react-router-dom'
const Header = () => {
  const param=useParams()
  console.log(param.id)
    const navigate=useNavigate()
  return (
    <>
    <button onClick={()=>navigate('/about')}>
      Back page
    </button>
   
    <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        <Link to="/user/temp">User</Link>
    </div>
    </>
  )
}

export default Header