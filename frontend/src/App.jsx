import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';

import './App.css';


function App() {
  

 

  

  return (
    
      <BrowserRouter>
        
       
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          </Routes>
        
      </BrowserRouter>
   
  );
}

export default App;
