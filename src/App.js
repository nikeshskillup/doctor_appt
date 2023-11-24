import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Signup from './Components/Sign_Up/Sign_Up'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Layout/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              <Route path="/finddoctor" element={<FindDoctorSearch/>}/>
            
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;