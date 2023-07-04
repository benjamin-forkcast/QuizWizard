import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Form2View() {

  function handleNext() {
    console.log("Moving to form 3")
  }

  return (
    <div>
      Form 2 <br /> Blabla <br/> Blabla <br /> Blabla <br/> Blabla
    </div>
);
}

