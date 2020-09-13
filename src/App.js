import React from 'react';
import SurveyForm from './images/SurveyForm.png';
import LandingPage from './images/LandingPage.png';
import TributePage from './images/TributePage.png';
import TecnicalDocumentation from './images/TecnicalDocumentation.png';
import Footer from './components/footer/Footer';
import NavBar from './components/header/NavBar';
import Projects from './components/main/Projects';
// import Welcome from './components/main/Welcome';

const images = [
  { image: SurveyForm, tittle: "Survey Form" },
  { image: LandingPage, tittle: "Landing Page" },
  { image: TributePage, tittle: "Tribute Page" },
  { image: TecnicalDocumentation, tittle: "Tecnical Documentation"}
];

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Welcome /> */}
      <Projects images={images} />
      <Footer />      
    </div>
  );
}

export default App;
