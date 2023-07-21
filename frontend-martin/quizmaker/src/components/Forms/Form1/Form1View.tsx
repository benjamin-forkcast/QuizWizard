import React from 'react';
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

import TextField from '@mui/material/TextField';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import './Form1.css';
import { IconButton } from '@mui/material';

export default function Form1View() {

  //Custom event som skickar upp värdet till FormPresenter när modellen ska uppdateras?
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);

  const changeNumberOfQuestionsButtons = (change: number) => {
    if (numberOfQuestions + change >= 1) {
      setNumberOfQuestions(numberOfQuestions + change);
    }
    else {
      setNumberOfQuestions(1);
    }
  }

  const changeNumberOfQuestionsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) >= 1) {
      setNumberOfQuestions(Number(event.target.value));
    }
    else {
      setNumberOfQuestions(1);
    }
  }

  return (
    <>
      <h1>
        Number of Questions
      </h1>
      <div className='numberInput'>
          <input className='nInput' type="number" value={numberOfQuestions} onChange={changeNumberOfQuestionsInput}/>
        <div className='arrows'>
          <IconButton aria-label='decrease-much' onClick={() => changeNumberOfQuestionsButtons(-10)}><KeyboardDoubleArrowLeftIcon/> </IconButton>
          <IconButton aria-label='decrease' onClick={() => changeNumberOfQuestionsButtons(-1)}><KeyboardArrowLeftIcon/> </IconButton>
          <IconButton aria-label='increase' onClick={() => changeNumberOfQuestionsButtons(1)}><KeyboardArrowRightIcon/> </IconButton>
          <IconButton aria-label='increase-much' onClick={() => changeNumberOfQuestionsButtons(10)}><KeyboardDoubleArrowRightIcon/> </IconButton>
        </div>
      </div>
    </>
  );
}

