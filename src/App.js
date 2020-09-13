import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/header/NavBar';
import Welcome from './components/main/Welcome';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
