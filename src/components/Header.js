import React from 'react';
import './Header.css';

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
            <a href="#" className="btn-main-offer">Info</a>
            <a href="#" className="btn-main-offer">Portfolio</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Header
