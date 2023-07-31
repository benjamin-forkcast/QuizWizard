import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import './Form4.css'

type Form4ViewProps = {
  frmats: string[];
  setFrmats: (frmats: string[]) => void;
};

export default function Form4View({
  frmats,
  setFrmats,
}: Form4ViewProps) {
  const [formats, setFormats] = useState<string[]>(frmats);
  const [format1Set, setFormat1Set] = useState<boolean>(false);
  const [format2Set, setFormat2Set] = useState<boolean>(false);
  const [format3Set, setFormat3Set] = useState<boolean>(false);

  // only initial render
  useEffect(() => {
    if (formats.includes("1/X/2")) {
      setFormat1Set(true);
    }
    if (formats.includes("Estimation")) {
      setFormat2Set(true);
    }
    if (formats.includes("Trivia")) {
      setFormat3Set(true);
    }
  }, []);

  const selectFormat = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    format: string
  ) => {
    if (format === "1/X/2") {
        if (format1Set) {
            setFormat1Set(false);
            const newFormats = formats.filter((f) => f !== format);
            setFormats(newFormats);
            setFrmats(newFormats);
        }
        else {
            setFormat1Set(true);
            setFormats([...formats, format]);
            setFrmats([...formats, format]);
        }
    } else if (format === "Estimation") {
        if (format2Set) {
            setFormat2Set(false);
            const newFormats = formats.filter((f) => f !== format);
            setFormats(newFormats);
            setFrmats(newFormats);
        }
        else {
            setFormat2Set(true);
            setFormats([...formats, format]);
            setFrmats([...formats, format]);
        }
    } else if (format === "Trivia") {
        if (format3Set) {
            setFormat3Set(false);
            const newFormats = formats.filter((f) => f !== format);
            setFormats(newFormats);
            setFrmats(newFormats);
        }
        else {
            setFormat3Set(true);
            setFormats([...formats, format]);
            setFrmats([...formats, format]);
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
