import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';


const navLinks = [
    { linkText: 'About', path: '/about' },
    { linkText: 'Projects', path: '/projects' },
    { linkText: 'Contact', path: '/contact' },
]

const LinkStyles = {
    style: {
        textDecoration: 'none'
    }
}

const NavigationBar = () => {
    return (
        <nav id="navigationBar">

            <Link {...LinkStyles} to="/" className="nb-logo flicker">
                <p>NitinBisht</p>
            </Link> 

            <div className="nav-right-side">
                {navLinks.map((link, index) => (
                    <Link {...LinkStyles} to={link.path} key={index} className="nav-right-side-links flicker">
                        <p>{link.linkText}</p>
                    </Link>)
                )}
            </div>


        </nav>
    );
};

export default NavigationBar;