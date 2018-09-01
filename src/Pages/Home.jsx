import React, { Component } from 'react';
import NavigationBar from '../Components/NavigationBar/NavigationBar.jsx';
import './PageStyles.css';
import Footer from '../Components/Footer/Footer.jsx';

class Home extends Component {
    render() {
        return (
            <div id="home-page">
                <NavigationBar />
                <section className="hero-description-section">
                    <div>
                        {/* <h1 className="hero-heading">Hi, I am Blah Blah blah...</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aliquid molestias pariatur reprehenderit quia adipisci rerum, commodi optio inventore repudiandae magnam blanditiis natus, porro maxime atque enim omnis eveniet dolor.</p> */}
                    </div>
                </section>

                <Footer />
            </div>

        );
    }
}

export default Home;