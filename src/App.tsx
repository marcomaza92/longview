import React from 'react';
import './App.scss';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import { ThemeProvider } from './context/Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider value={'light'}>
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
    </ThemeProvider>
  );
}

export default App;
