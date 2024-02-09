import Navbar from "../components/Navbar";
import React from 'react';
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactData from "../components/ContactData";
const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg='https://images.unsplash.com/photo-1575523420630-399fd716f72c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Contact'
            btnClass='hide'
        />
        <ContactData />
        <Footer />
    </>
     );
}
 
export default Contact;