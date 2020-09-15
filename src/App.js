import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/footer/Footer';
import NavBar from './components/header/NavBar';
import Projects from './components/main/Projects';
import Welcome from './components/main/Welcome';
import Contact from './components/main/Contact';

const links = [
  { 'link': <Link to="/">Welcome</Link> },
  { 'link': <Link to="/projects">Projects</Link> },
  { 'link': <Link to="/contact">Contact</Link> }
]

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Router>
        <NavBar links={links} />
        <Switch >
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>     
      <Footer />
    </div>
  );
}

export default App;
