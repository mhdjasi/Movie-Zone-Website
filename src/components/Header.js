import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <h2 onClick={()=> window.scroll(0, 0)} className='title'>Movie Zone</h2>

        <div className='pages'>
            <Link to={'/'} className='sections'><a><h5>Home</h5></a></Link>
    
            <Link to={'/movies'} className='sections'><a><h5>Movies</h5></a></Link>

            <Link to={'/series'} className='sections'><a><h5>Tv Series</h5></a></Link>

            <Link to={'/search'} className='sections'><a><h5>Search</h5></a></Link>

            
        </div>



    </div>
  )
}

export default Header