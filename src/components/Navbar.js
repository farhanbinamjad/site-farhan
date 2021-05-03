import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import './Navbar.css'

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

        <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo'></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/portfolio' className="nav-link">Portfolio</Link>>
        </li>
        <li className="nav-item">
        <Link to='/contact' className="nav-link">Contact</Link>
        </li>
        
        </ul>


</div>
</nav>
    )
}

export default Navbar
