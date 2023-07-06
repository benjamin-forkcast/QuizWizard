import React from 'react';
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

export default function Form1View() {
  

  const [isVisible, setIsVisible] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);


  return (
    <>
      <div>
        Number of Questions
      </div>
      <div>
        <TextField id="standard-basic" value={numberOfQuestions} label="" variant="standard" type="Number" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNumberOfQuestions(Number(event.target.value));}}/>
        <Slider defaultValue={numberOfQuestions} step={1} marks min={1} max={20} onChange={(event: Event, value) => {setNumberOfQuestions(Number(value));}}/>
      </div>
    </>
  );
}

