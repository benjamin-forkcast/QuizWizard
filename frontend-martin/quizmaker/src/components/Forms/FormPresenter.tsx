import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { QuizModel } from "../QuizModel/QuizModel";

import Form1View from "./Form1/Form1View";
import Form2View from "./Form2/Form2View";
import Form3View from "./Form3/Form3View";
import Form4View from "./Form4/Form4View";
import Form5View from "./Form5/Form5View";
import Form6View from "./Form6/Form6View";
import Form7View from "./Form7/Form7View";
import SubmitFormView from "./Submission/SubmitFormView";

import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import StorageIcon from '@mui/icons-material/Storage';
import Person2Icon from '@mui/icons-material/Person2';
import CheckIcon from '@mui/icons-material/Check';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Button } from "@mui/material";

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
  const [form7IsVisible, setForm7IsVisible] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(-300);
  const [currentForm, setCurrentForm] = useState(1);
  const [submitQuizVisible, setSubmitQuizVisible] = useState(false);

  const[quizModel,] = useState(new QuizModel());

  const onSetNumberOfQuestions = (numberOfQuestions: number) => {
    quizModel.setNumberOfQuestions(numberOfQuestions);
  };

  const onSetTheme = (quizTheme: string[]) => {
    quizModel.setQuizTheme(quizTheme);
  };

  const onSetCountry = (country: string) => {
    quizModel.setCountry(country);
  };

  const onSetFormat = (format: string[]) => {
    quizModel.setFormat(format);
  };

  const onSetDifficulty = (difficulty: string) => {
    quizModel.setDifficulty(difficulty);
  };

  const onSetVibe = (vibe: string) => {
    quizModel.setVibe(vibe);
  };

  const onSetSpecificRequest = (specificRequest: string) => {
    quizModel.setSpecificRequest(specificRequest);
  };

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
      setForm7IsVisible(true);
      setCurrentForm(7);
    } else if (form7IsVisible) {
      setForm7IsVisible(false);
      setForm1IsVisible(true);
      setCurrentForm(1);
    }
  }

  function toggleBackward() {
    setExitAnimation(-300);
    if (form1IsVisible) {
      setForm1IsVisible(false);
      setForm7IsVisible(true);
      setCurrentForm(7);
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
    } else if (form7IsVisible) {
      setForm7IsVisible(false);
      setForm6IsVisible(true);
      setCurrentForm(6);
    }
  }

  function toggleForm(formNumber: number) {
    console.log("quizmodel: ")
    console.log(quizModel);
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
      setForm7IsVisible(false);
      setCurrentForm(1);
    } else if (formNumber === 2) {
      setForm1IsVisible(false);
      setForm2IsVisible(true);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setForm7IsVisible(false);
      setCurrentForm(2);
    } else if (formNumber === 3) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(true);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setForm7IsVisible(false);
      setCurrentForm(3);
    } else if (formNumber === 4) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(true);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setForm7IsVisible(false);
      setCurrentForm(4);
    } else if (formNumber === 5) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(true);
      setForm6IsVisible(false);
      setForm7IsVisible(false);
      setCurrentForm(5);
    } else if (formNumber === 6) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(true);
      setForm7IsVisible(false);
      setCurrentForm(6);
    } else if (formNumber === 7) {
      setForm1IsVisible(false);
      setForm2IsVisible(false);
      setForm3IsVisible(false);
      setForm4IsVisible(false);
      setForm5IsVisible(false);
      setForm6IsVisible(false);
      setForm7IsVisible(true);
      setCurrentForm(7);
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
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form1View numQuestions={quizModel.numberOfQuestions} setNumQuestions={onSetNumberOfQuestions}/>
            </motion.div>
          )}
          {form2IsVisible && (
            <motion.div
              key={2}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form2View themes={quizModel.quizTheme} setThemes={onSetTheme}/>
            </motion.div>
          )}
          {form3IsVisible && (
            <motion.div
              key={3}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form3View ctry={quizModel.country} setCtry={onSetCountry}/>
            </motion.div>
          )}
          {form4IsVisible && (
            <motion.div
              key={4}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form4View frmats={quizModel.format} setFrmats={onSetFormat}/>
            </motion.div>
          )}
          {form5IsVisible && (
            <motion.div
              key={5}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form5View diff={quizModel.difficulty} setDiff={onSetDifficulty}/>
            </motion.div>
          )}
          {form6IsVisible && (
            <motion.div
              key={6}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form6View vbe={quizModel.vibe} setVbe={onSetVibe}/>
            </motion.div>
          )}
          {form7IsVisible && (
            <motion.div
              key={7}
              initial={{ x: exitAnimation, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`questions ${submitQuizVisible ? 'blur' : ''}`}
            >
              <Form7View req={quizModel.specificRequest} setReq={onSetSpecificRequest}/>
            </motion.div>
          )}
          {submitQuizVisible && (
            <motion.div
              key={8}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className='submitPopup'
            >
              <SubmitFormView quizModel={quizModel}/>
            </motion.div>)}
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
        <IconButton aria-label="navigate-7th">{currentForm===7&&<RadioButtonCheckedIcon/> || <RadioButtonUncheckedIcon onClick={(event) => toggleForm(7)}/>}</IconButton>
        <IconButton aria-label="navigate-right"><ChevronRightIcon onClick={toggleForward}/></IconButton>
      </div>
      <div className="submitContainer">
      {!submitQuizVisible ? <div className="submit" onClick={() => setSubmitQuizVisible(!submitQuizVisible)}>
          Submit
        </div>:
        <div className="acceptContainer">
        <div className="submit" onClick={() => setSubmitQuizVisible(!submitQuizVisible)}>
          <CheckIcon style={{'color':'rgb(23, 177, 105)'}}/>
        </div><div className="submit" onClick={() => setSubmitQuizVisible(!submitQuizVisible)}>
          <CloseSharpIcon style={{'color':'rgb(196, 30, 58)'}}/>
        </div>
        </div>}
      </div>
    </div>
  );
}
