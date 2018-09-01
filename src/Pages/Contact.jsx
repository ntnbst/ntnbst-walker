import React from 'react';
import NavigationBar from '../Components/NavigationBar/NavigationBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const Contact = () => {
    return (
        <div>
            <NavigationBar />

            <section className="page-description text-center">
                <h1 className="text-center">Contact</h1>
                <p>Feel free to contact me through the email below, I'd love to chat </p>
                <a href="mailto:nitin.bisht47@gmail.com" style={{ textDecoration: 'none', color: '#38c' }}>nitin.bisht47@gmail.com</a> 
            </section>

            <Footer />
        </div>
    );
};

export default Contact;