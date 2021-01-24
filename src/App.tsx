import './styles/main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories';
import Features from './components/FeaturesPage';

function App() {
   return (
      <BrowserRouter>
         <Route exact path="/" component={Home} />
         <Route exact path="/stories" component={Stories} />
         <Route exact path="/features" component={Features} />
      </BrowserRouter>
   );
}

export default App;
