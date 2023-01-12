import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class Navbar extends React.Component {

    render() {
        const link = () => {
            window.location.href = "https://instagram.com/japonaisekitchen/";
        }

        return (
            <div className="navbar-container">
                <div className="navbar-desktop-menu">
                    <img alt="Japonaise Kitchen" src="/playground_assets/darkmodelogo.png" className="navbar-logo" />
                    <div className="navbar-nav">
                        <a href="#about" className="navbar-item">ABOUT</a>
                        <a href="#gallery" className="navbar-item">GALLERY</a>
                        <a href="#menu" className="navbar-item">MENU</a>
                        <a href="https://www.instagram.com/japonaisekitchen/" className="navbar-item">INSTAGRAM</a>
                    </div>
                </div>
                <div className="navbar-mobile-menu">
                    <img alt="Japonaise Kitchen" src="/playground_assets/darkmodelogostacked.png" className="navbar-mobile-logo" />
                    <img alt="instagram" src="/playground_assets/instagram.png" className="navbar-icon" onClick={link}/>
                </div>
            </div>  
        );
    }
}

export default Navbar;