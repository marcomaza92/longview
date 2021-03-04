import React, { ReactElement, useContext } from 'react';
import './App.scss';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import { ThemeContext } from './context/Theme';

function App(): ReactElement {
  const { options } = useContext(ThemeContext);
  return (
    <div className={`content ${options.mode}`}>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
