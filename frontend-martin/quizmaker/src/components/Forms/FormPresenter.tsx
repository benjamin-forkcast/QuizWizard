import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Form1View from "./Form1/Form1View";
import Form2View from "./Form2/Form2View";
import Form3View from "./Form3/Form3View";
import Form4View from "./Form4/Form4View";
import Form5View from "./Form5/Form5View";
import Form6View from "./Form6/Form6View";

import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import StorageIcon from '@mui/icons-material/Storage';
import Person2Icon from '@mui/icons-material/Person2';

import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function FormPresenter() {

  const [createQuizVisible, setCreateQuizVisible] = useState(false);
  const [topQuizVisible, setTopQuizVisible] = useState(false);
  const [quizHistoryVisible, setQuizHistoryVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [form1IsVisible, setForm1IsVisible] = useState(true);
  const [form2IsVisible, setForm2IsVisible] = useState(false);
  const [form3IsVisible, setForm3IsVisible] = useState(false);
  const [form4IsVisible, setForm4IsVisible] = useState(false);
  const [form5IsVisible, setForm5IsVisible] = useState(false);
  const [form6IsVisible, setForm6IsVisible] = useState(false);
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
      setForm4IsVisible(true);
      setCurrentForm(4);
    } else if (form4IsVisible) {
      setForm4IsVisible(false);
      setForm5IsVisible(true);
      setCurrentForm(5);
    } else if (form5IsVisible) {
      setForm5IsVisible(false);
      setForm6IsVisible(true);
      setCurrentForm(6);
    } else if (form6IsVisible) {
      setForm6IsVisible(false);
      setForm1IsVisible(true);
      setCurrentForm(1);
    }
  }

  function toggleBackward() {
    setExitAnimation(-300);
    if (form1IsVisible) {
      setForm1IsVisible(false);
      setForm6IsVisible(true);
      setCurrentForm(6);
    } else if (form2IsVisible) {
      setForm2IsVisible(false);
      setForm1IsVisible(true);
      setCurrentForm(1);
    } else if (form3IsVisible) {
      setForm3IsVisible(false);
      setForm2IsVisible(true);
      setCurrentForm(2);
    } else if (form4IsVisible) {
      setForm4IsVisible(false);
      setForm3IsVisible(true);
      setCurrentForm(3);
    } else if (form5IsVisible) {
      setForm5IsVisible(false);
      setForm4IsVisible(true);
      setCurrentForm(4);
    } else if (form6IsVisible) {
      setForm6IsVisible(false);
      setForm5IsVisible(true);
      setCurrentForm(5);
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
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setCurrentForm(1);
    } else if (formNumber === 2) {
      setForm1IsVisible(false);
      setForm2IsVisible(true);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setCurrentForm(2);
    } else if (formNumber === 3) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(true);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setCurrentForm(3);
    } else if (formNumber === 4) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(true);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setCurrentForm(4);
    } else if (formNumber === 5) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(true);
      setForm6IsVisible(false);
      setCurrentForm(5);
    } else if (formNumber === 6) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(true);
      setCurrentForm(6);
    }
  }

  return (
    <div className="forms-container">
      <div className="menuBar">
        <div 
          onMouseEnter={() => setCreateQuizVisible(true)} 
          onMouseLeave={() => setCreateQuizVisible(false)}>
            <div><DynamicFormIcon/></div>
              <AnimatePresence initial={false}>{createQuizVisible && <motion.div
                                      key={4}
                                      initial={{ y: -10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -10, opacity: 0 }}>Create Quiz</motion.div>}
              </AnimatePresence>
        </div>
        <div 
          onMouseEnter={() => setTopQuizVisible(true)} 
          onMouseLeave={() => setTopQuizVisible(false)}>
            <div><SportsScoreIcon/></div>
              <AnimatePresence initial={false}>{topQuizVisible && <motion.div
                                      key={4}
                                      initial={{ y: -10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -10, opacity: 0 }}>Top Quizes</motion.div>}
              </AnimatePresence>
        </div>
        <div 
          onMouseEnter={() => setQuizHistoryVisible(true)} 
          onMouseLeave={() => setQuizHistoryVisible(false)}>
            <div><StorageIcon/></div>
              <AnimatePresence initial={false}>{quizHistoryVisible && <motion.div
                                      key={4}
                                      initial={{ y: -10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -10, opacity: 0 }}>Quiz History</motion.div>}
              </AnimatePresence>
        </div>
        <div 
          onMouseEnter={() => setProfileVisible(true)} 
          onMouseLeave={() => setProfileVisible(false)}>
            <div><Person2Icon/></div>
              <AnimatePresence initial={false}>{profileVisible && <motion.div
                                      key={4}
                                      initial={{ y: -10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -10, opacity: 0 }}>My Profile</motion.div>}
              </AnimatePresence>
        </div>
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
          {form4IsVisible && (
            <motion.div
              key={4}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="questions"
            >
              <Form4View />
            </motion.div>
          )}
          {form5IsVisible && (
            <motion.div
              key={5}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="questions"
            >
              <Form5View />
            </motion.div>
          )}
          {form6IsVisible && (
            <motion.div
              key={6}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="questions"
            >
              <Form6View/>
            </motion.div>
          )}
        </AnimatePresence>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
      </div>
      <div className="navigate">
        <IconButton aria-label="navigate-left"><ChevronLeftIcon onClick={toggleBackward}/></IconButton>
        <IconButton aria-label="navigate-1st">{currentForm===1&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(1)}/>}</IconButton>
        <IconButton aria-label="navigate-2nd">{currentForm===2&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(2)}/>}</IconButton>
        <IconButton aria-label="navigate-3rd">{currentForm===3&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(3)}/>}</IconButton>
        <IconButton aria-label="navigate-4th">{currentForm===4&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(4)}/>}</IconButton>
        <IconButton aria-label="navigate-5th">{currentForm===5&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(5)}/>}</IconButton>
        <IconButton aria-label="navigate-6th">{currentForm===6&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(6)}/>}</IconButton>
        <IconButton aria-label="navigate-right"><ChevronRightIcon onClick={toggleForward}/></IconButton>
      </div>
      <div>
        Submit
      </div>
    </div>
  );
}
