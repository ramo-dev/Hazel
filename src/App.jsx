import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              {/* Your individual routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route element={<NotFound />} />
            </Routes>

    </div>
   );
}
 
export default App;
