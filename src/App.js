import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import About from './pages/About';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          { /*  <Route path="/about">
            <About /> 
          </Route>*/}

        </Switch>
      </Router>

    </div>
  );
}

export default App;
