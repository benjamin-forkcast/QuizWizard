import React from 'react';
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export default function Form1View() {
  

  const [isVisible, setIsVisible] = useState(false);

  function handleNext() {
    console.log('Moving to form 2')
  }

  function toggle() {
    setIsVisible(!isVisible);
  }

  return (
      <div>
        Form 1 <br /> Blabla <br/> Blabla <br /> Blabla <br/> Blabla
      </div>
  );
}

