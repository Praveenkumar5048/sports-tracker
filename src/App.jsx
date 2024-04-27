import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './Home';
import Cricket from './pages/cricket/Cricket.jsx';
import Badminton from './pages/badminton/Badminton.jsx';
import Basketball from './pages/basketball/Basketball.jsx';
import About from './pages/about/About.jsx';
import Favourite from './pages/favourites/Favourite.jsx';
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



