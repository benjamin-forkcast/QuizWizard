import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import FormPresenter from './components/Forms/FormPresenter';

function App() {
  return (
    <div className='App'>
      <FormPresenter/>
    </div>
  );
}

export default App;
