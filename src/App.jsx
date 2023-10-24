import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Cricket from './Cricket/Cricket';
import Badminton from './Badminton';
import Basketball from './Basketball';
import About from './About';
import Favourite from './Favourite';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cricket" element={<Cricket />} />
          <Route path="/Badminton" element={<Badminton />} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/Favourite" element={<Favourite />}  />
        </Routes>
      </BrowserRouter>
    );
}

export default App;



