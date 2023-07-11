import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Form4View() {
  const [formats, setFormats] = useState<string[]>([]);
  const [format1Set, setFormat1Set] = useState<boolean>(false);
  const [format2Set, setFormat2Set] = useState<boolean>(false);
  const [format3Set, setFormat3Set] = useState<boolean>(false);

  const selectFormat = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    format: string
  ) => {
    setFormats([...formats, format]);
    if (format === "1/X/2") {
        if (format1Set) {
            setFormat1Set(false);
        }
        else {
            setFormat1Set(true);
        }
    } else if (format === "Estimation") {
        if (format2Set) {
            setFormat2Set(false);
        }
        else {
            setFormat2Set(true)
        }
    } else if (format === "Trivia") {
        if (format3Set) {
            setFormat3Set(false);
        }
        else {
            setFormat3Set(true)
        }
    }

  };

  return (
    <div>
      <h1>Question Format</h1>
      <div className="questionFormats">
        <div
          onClick={(event) => {
            selectFormat(event, "1/X/2");
          }}
          className = {format1Set ? "questionFormatClicked" : "questionFormatsNotClicked"}
        >
          1/X/2
        </div>
        <div
          onClick={(event) => {
            selectFormat(event, "Estimation");
          }}
            className = {format2Set ? "questionFormatClicked" : "questionFormatsNotClicked"}
        >
          Estimation
        </div>
        <div
          onClick={(event) => {
            selectFormat(event, "Trivia");
          }}
            className = {format3Set ? "questionFormatClicked" : "questionFormatsNotClicked"}
        >
          Trivia
        </div>
      </div>
    </div>
  );
}
