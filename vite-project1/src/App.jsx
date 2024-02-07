import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./routes/Home";
import About from './routes/About';
import Service from "./routes/Service";
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

import './index.css';


const App = () => {
  return ( 
    <div className='App'>
        
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/service" component={Service} />
              <Route component={NotFound} />
            </Switch>
        </Router>
    </div>
   );
}
 
export default App;
