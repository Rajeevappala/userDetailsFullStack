import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">USER DETAILS</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <h1 className='head'>User Details</h1>
      <ul className="navbar-nav">
        <li className="nav-item" >
            <Link to ="/" className='linkEle'>
            Home
            </Link>
          
        </li>
        <li className="nav-item">
          <Link to="/all" className='linkEle'>All Posts
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default index
