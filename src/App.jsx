import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from './routes/About';
import Service from "./routes/Service";
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

import './index.css';


const App = () => {
  return ( 
    <div className='App'>
        
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/service" element={<Service/>} />
              <Route component={<NotFound/>} />
            </Routes>
    </div>
   );
}
 
export default App;
