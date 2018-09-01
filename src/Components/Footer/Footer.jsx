import React from 'react';
import '../NavigationBar/NavigationBar.css';

const footerLinks = [
    { linkText: 'Github', path: 'https://github.com/ntnbst' },
    { linkText: 'Twitter', path: 'https://twitter.com/ntnbst' },
    { linkText: 'Codepen', path: 'https://codepen.com/ntnbst' },
    { linkText: 'Medium', path: 'https://github.com/ntnbst' },
    { linkText: 'BitBucket', path: 'https://bitbucket.org/ntnbst/' }
]

const Footer = () => {
    return (
        <nav id="footer">
            <div style={{ float: "none" }} className="nav-right-side text-center">
                <p>WHERE TO FIND ME</p>
                {footerLinks.map((link, index) => (
                    <a style={{ textDecoration: 'none' }} href={link.path} key={index} className="nav-right-side-links flicker">
                        <p>{link.linkText}</p>
                    </a>)
                )}
            </div>
        </nav>
    );
};

export default Footer;