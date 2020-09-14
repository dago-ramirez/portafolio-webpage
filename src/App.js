import React from 'react';
// import SurveyForm from './images/SurveyForm.png';
// import LandingPage from './images/LandingPage.png';
// import TributePage from './images/TributePage.png';
// import TecnicalDocumentation from './images/TecnicalDocumentation.png';
import Footer from './components/footer/Footer';
import NavBar from './components/header/NavBar';
import Projects from './components/main/Projects';
import Welcome from './components/main/Welcome';
import Contact from './components/main/Contact';

// const cardData = [
//   { image: SurveyForm, tittle: "Survey Form", endPoint: 'https://dago-ramirez.github.io/Survey-Form/' },
//   { image: LandingPage, tittle: "Landing Page", endPoint: 'https://dago-ramirez.github.io/Landing-Page/' },
//   { image: TributePage, tittle: "Tribute Page", endPoint: 'https://dago-ramirez.github.io/Tribute_Page/' },
//   { image: TecnicalDocumentation, tittle: "Tecnical Documentation", endPoint: 'https://dago-ramirez.github.io/Tecnical_Documentation_Page/' }
// ];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Projects />
      <Contact />
      <Footer />      
    </div>
  );
}

export default App;
