import React from 'react'
import { Link } from 'react-router-dom'
import './Bottom.css'

function Bottom() {
  return (
    <div>
        <nav className="mobile-nav">
        <Link to={'/'} className="links">
            <a href="#" className='bloc-icon'>
                <img src="https://i.postimg.cc/7LCXc4wS/home.png" alt=""/> Home   
            </a>
        </Link>
        <Link to={'/movies'} className="links">
            <a href="#" className="bloc-icon" >
                <img src="https://i.postimg.cc/FzNg7NJk/film.png" alt=""/>
                Movies
            </a>
        </Link >
        <Link to={'/series'} className="links">
            <a href="#" className="bloc-icon" >
                <img src="https://i.postimg.cc/G3Dv1BV7/television.png" alt=""/>
                TV Series
    
            </a>
        </Link>
        <Link to={'/search'} className="links">
            <a href="#" className="bloc-icon">
                <img src="https://i.postimg.cc/MK83kJPB/magnifying-glass.png" alt=""/>
                Search
            </a>
        </Link>
    </nav>
    </div>
  )
}

export default Bottom
