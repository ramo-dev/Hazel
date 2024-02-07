import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from '../components/Destination'
const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Hero 
            cName="hero"
            heroImg='https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='My Journey My Story'
            text='choose your favourite destination'
            buttonText='Travel Plan'
            url='/'
            btnClass='show'
        />
        <Destination />
        </>
     );
}
 
export default Home;

