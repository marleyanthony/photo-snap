import './styles/main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories';
import Features from './components/FeaturesPage';
import Pricing from './components/PricingPage';

function App() {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Route exact path="/" component={Home} />
         <Route exact path="/stories" component={Stories} />
         <Route exact path="/features" component={Features} />
         <Route exact path="/pricing" component={Pricing} />
      </BrowserRouter>
   );
}

export default App;
