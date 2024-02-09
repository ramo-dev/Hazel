import Navbar from "../components/Navbar";
import React from 'react';
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
const Service = () => {
    return ( 
        <>
        <Navbar/>
        <Hero 
            cName="hero-mid"
            heroImg='https://images.unsplash.com/photo-1550573079-b12f15bbfc8c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Services'
            btnClass='hide'
        />
        <Trip/>
        <Footer/>
    </>
     );
}
 
export default Service;