import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Projects from './Projects';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
            <div class = "entry-banner text-center">
						<h1 id = "hello">Hello, I'm</h1>
						<h1 id = "name">XXXX</h1>
						<h1 id ="person-description">UI Developer. UX Desinger. Problem Solver.</h1>
			</div>
            <div class = "row text-center">
            <div class = "banner-buttons">
            <Link to="./contact" className="btn-main-offer">Info</Link>
            <Link to="./portfolio" className="btn-main-offer">Portfolio</Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Header
