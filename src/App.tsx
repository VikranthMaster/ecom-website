import React, { useState } from 'react';
import './App.css';
import { Navbar } from './pages/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/wishlist' element={<h1>wishlist Page</h1>}></Route>
            <Route path='/cart' element={<h1>cart Page</h1>}></Route>
            <Route path='/profile' element={<h1>profile Page</h1>}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
