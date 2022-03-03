import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import WordNumber from './components/WordNumber';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:string" element={<WordNumber/>}/>
            <Route path="/:string/:textColor" element={<WordNumber />} />
          <Route path="/:string/:textColor/:bgColor" element={<WordNumber/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;