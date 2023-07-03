import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

function App() {
  return (
    <>
      <AnimatePresence >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form1 /> /* LÄGG TILL CIRKLAR FÖR ATT NAVIGERA MELLAN FRÅGOR OCKSÅ, EN FÖR VARJE FORM_i*/} />
            <Route path="/form2" element={<Form2 />} />
            <Route path="/form3" element={<Form3 />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
