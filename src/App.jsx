// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './Pages/HomePage.jsx';
import Footer from './components/Footer'
// import Home from './Pages/Home';
import About from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import Ee from './Pages/eePage.jsx';
import Cse from './Pages/csePage.jsx';
import Mech from './Pages/mechPage.jsx';
import Civil from './Pages/civilPage.jsx';
import Demo from './Pages/demopage.jsx';
import Robotics from './Pages/roboticsPage.jsx';
import Arduino from './Pages/arduinoPage.jsx';
import Ai from './Pages/ai.jsx';

// import Contact from './Pages/Contact';
// import Branches from './Pages/Branches';

const App = () => {
  const styles = {
    content: {
      paddingTop: '60px', // Ensure there's enough space for the fixed navbar
    }
  };

  return (
    <Router>
      <NavBar />
      <div style={styles.content}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Ee" element={<Ee/>} />
        <Route path="/Cse" element={<Cse/>} />
        <Route path="/Mech" element={<Mech/>} />
        <Route path="/Civil" element={<Civil/>} />
        <Route path="/Demo" element={<Demo/>} />
        <Route path="/robotics" element={<Robotics/>} />
        <Route path="/arduino" element={<Arduino/>} />
        <Route path="/ai" element={<Ai/>} />

          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branches/:branchName" element={<Branches />} /> */}
         
        </Routes>
      </div>
      <hr></hr>
      <Footer/>
    </Router>
  );
}

export default App;
