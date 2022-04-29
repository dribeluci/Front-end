import React from 'react';
import './App.css';
import Home from './pages/home/Home'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'

function App() {
  return(

    
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
  
          </Routes>
        </div>
        <Footer />
      </Router>
    );
    

}

export default App;
