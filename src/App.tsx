import './styles/main.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories';

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route exact path="/stories" component={Stories} /> 
    </BrowserRouter>
  );
}

export default App;
