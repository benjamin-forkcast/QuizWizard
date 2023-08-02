import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./SubmitForm.css";

import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import { QuizModel } from "../../QuizModel/QuizModel";

type SubmitFormViewProps = {
  quizModel: QuizModel;
};

export default function SubmitFormView({ quizModel }: SubmitFormViewProps) {

    // const present = (value: string) => {
    //     return {value + ", "}</div>;
    // };

  return (
    <div className="submission">
      <div>Number of Questions: {quizModel.numberOfQuestions}</div>
      <div>Quiz Theme: {quizModel.quizTheme.map(elem => elem + ", ")}</div>
      <div>Country: {quizModel.country}</div>
      <div>Format: {quizModel.format.map(elem => elem + ", ")}</div>
      <div>Difficulty: {quizModel.difficulty}</div>
      <div>Vibe: {quizModel.vibe}</div>
      <div>Specific Request: {quizModel.specificRequest}</div>
    </div>
  );
}
