import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from '../components/Destination'
import Trip from "../components/Trip";
import Footer from "../components/Footer";
const Home = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault(); // Prevent the default behavior of the button click
            window.scrollTo({
                top: window.innerHeight, // scroll to 100vh
                behavior: 'smooth' // smooth scrolling behavior
            });
        };

        const buttons = document.querySelectorAll('.show');
        buttons.forEach(button => {
            button.addEventListener('click', handleScroll);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', handleScroll);
            });
        };
    }, []);
    return ( 
        <>
        <Navbar/>
        <Hero 
            cName="hero"
            heroImg='https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='My Name is Hazel Bakhoya'
            text='And This is my Life Story'
            buttonText='Get Started'
            url='/'
            btnClass='show'
        />
        <Destination />
        <Trip/>
        <Footer />
        </>
     );
}
 
export default Home;

