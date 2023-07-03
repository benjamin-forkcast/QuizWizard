import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Form3() {

  function handleNext() {
    console.log("HJ")
  }

  return (
    <div className='form'>
      <div className='q-container'>
        <motion.div
          initial={{ x: "3000%" }}
          animate={{ x: "0%"}}
          transition={{ duration: 0.75 }}
          exit={{ opacity: 1 }}
          className='questions'
        >
          Form3 <br /> Blabla <br/> Blabla <br /> Blabla <br/> Blabla
        </motion.div>
      </div>
      <div className='navigate'>
        <NavLink to="/form2">
          <button onClick={handleNext}> {"<"} </button>
        </NavLink>
        <NavLink to="/">
          <button onClick={handleNext}>Next</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Form3;