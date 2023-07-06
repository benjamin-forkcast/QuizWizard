import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Form1View from "./Form1View";
import Form2View from "./Form2View";
import Form3View from "./Form3View";

import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function FormPresenter() {
  const [form1IsVisible, setForm1IsVisible] = useState(true);
  const [form2IsVisible, setForm2IsVisible] = useState(false);
  const [form3IsVisible, setForm3IsVisible] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(-300);
  const [currentForm, setCurrentForm] = useState(1);
  // let exitAnimation : number = -300;

  function toggleForward() {
    setExitAnimation(300);
    if (form1IsVisible) {
      setForm1IsVisible(false);
      setForm2IsVisible(true);
      setCurrentForm(2);
    } else if (form2IsVisible) {
      setForm2IsVisible(false);
      setForm3IsVisible(true);
      setCurrentForm(3);
    } else if (form3IsVisible) {
      setForm3IsVisible(false);
      setForm1IsVisible(true);
      setCurrentForm(1);
    }
  }

  function toggleBackward() {
    setExitAnimation(-300);
    if (form1IsVisible) {
      setForm1IsVisible(false);
      setForm3IsVisible(true);
      setCurrentForm(3);
    } else if (form2IsVisible) {
      setForm2IsVisible(false);
      setForm1IsVisible(true);
      setCurrentForm(1);
    } else if (form3IsVisible) {
      setForm3IsVisible(false);
      setForm2IsVisible(true);
      setCurrentForm(2);
    }
  }

  function toggleForm(formNumber: number) {
    if (currentForm > formNumber) {
      setExitAnimation(-300);
    } else {
      setExitAnimation(300);
    }
    if (formNumber === 1) {
      setForm1IsVisible(true);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setCurrentForm(1);
    } else if (formNumber === 2) {
      setForm1IsVisible(false);
      setForm2IsVisible(true);
      setForm3IsVisible(false);
      setCurrentForm(2);
    } else if (formNumber === 3) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(true);
      setCurrentForm(3);
    }
  }

  return (
    <div className="forms-container">
      <div className="menuBar">
        <h1>Navbar to come</h1>
      </div>
      <div className="form">
        <AnimatePresence initial={false}>
          {form1IsVisible && (
            <motion.div
              key={1}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="questions"
            >
              <Form1View />
            </motion.div>
          )}
          {form2IsVisible && (
            <motion.div
              key={2}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="questions"
            >
              <Form2View />
            </motion.div>
          )}
          {form3IsVisible && (
            <motion.div
              key={3}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="questions"
            >
              <Form3View />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="navigate">
        <IconButton aria-label="navigate-left"><ChevronLeftIcon onClick={toggleBackward}/></IconButton>
        <IconButton aria-label="navigate-1st">{currentForm===1&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(1)}/>}</IconButton>
        <IconButton aria-label="navigate-2nd">{currentForm===2&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(2)}/>}</IconButton>
        <IconButton aria-label="navigate-3rd">{currentForm===3&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(3)}/>}</IconButton>
        <IconButton aria-label="navigate-right"><ChevronRightIcon onClick={toggleForward}/></IconButton>
      </div>
    </div>
  );
}
