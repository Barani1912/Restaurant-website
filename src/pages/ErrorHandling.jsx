import React from 'react'
import { useNavigate } from 'react-router-dom'
import UpSideDown from '../assets/UpsideDownDog.avif'

function ErrorHandling() {
    const navigate=useNavigate()
    return (
    <div>
        <div className='textContent'>
          <h1>ERROR - 404</h1>
          <h4>Sorry, we can't find that page. You'll find lots to explore on the home page.</h4>
          <button onClick={()=>navigate("/")}>Home</button>
        </div>
        <div className='imgContent'>
            <img src={UpSideDown} alt="dog-pic" />
        </div>
    </div>
  )
}

export default ErrorHandling