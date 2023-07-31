import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import './Form5.css'

type Form5ViewProps = {
  diff: string;
  setDiff: (diff: string) => void;
};

export default function Form5View({
  diff,
  setDiff,
}: Form5ViewProps) {
  const [difficulty, setDifficulty] = useState<string>(diff);
  const [difficultyEasy, setDifficultyEasy] = useState<boolean>(false);
  const [difficultyMedium, setDifficultyMedium] = useState<boolean>(false);
  const [difficultyHard, setDifficultyHard] = useState<boolean>(false);
  const [difficultyExtreme, setDifficultyExtreme] = useState<boolean>(false);

  // only initial render
  useEffect(() => {
    if (difficulty === "Easy") {
      setDifficultyEasy(true);
    } else if (difficulty === "Medium") {
      setDifficultyMedium(true);
    } else if (difficulty === "Hard") {
      setDifficultyHard(true);
    } else if (difficulty === "Extreme") {
      setDifficultyExtreme(true);
    }
  }, []);

  const [easyNonHover, setEasyNonHover] = useState<boolean>(false);
const [mediumNonHover, setMediumNonHover] = useState<boolean>(false);
const [hardNonHover, setHardNonHover] = useState<boolean>(false);
const [extremeNonHover, setExtremeNonHover] = useState<boolean>(false);

  const selectDifficulty = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    difficulty: string
    ) => {
        setDifficulty(difficulty);
        setDiff(difficulty);
        if (difficulty === "Easy") {
            if (difficultyEasy) {
                setDifficultyEasy(false);
                setDifficulty("");
            }
            else {
                setDifficultyEasy(true);
                setDifficulty("Easy");
            }
            setDifficultyMedium(false);
            setDifficultyHard(false);
            setDifficultyExtreme(false);
        } else if (difficulty === "Medium") {
            if (difficultyMedium) {
                setDifficultyMedium(false);
                setDifficulty("");
            }
            else {
                setDifficultyMedium(true);
                setDifficulty("Medium");
            }
            setDifficultyEasy(false);
            setDifficultyHard(false);
            setDifficultyExtreme(false);
        } else if (difficulty === "Hard") {
            if (difficultyHard) {
                setDifficultyHard(false);
                setDifficulty("");
            }
            else {
                setDifficultyHard(true);
                setDifficulty("Hard");
            }
            setDifficultyEasy(false);
            setDifficultyMedium(false);
            setDifficultyExtreme(false);
        } else if (difficulty === "Extreme") {
            if (difficultyExtreme) {
                setDifficultyExtreme(false);
                setDifficulty("");
            }
            else {
                setDifficultyExtreme(true);
                setDifficulty("Extreme");
            }
            setDifficultyEasy(false);
            setDifficultyMedium(false);
            setDifficultyHard(false);
        }
    };

    const hoverDifficulty = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        difficulty: string
    ) => {
        if (difficulty === "Easy") {
            setEasyNonHover(false);
            setMediumNonHover(true);
            setHardNonHover(true);
            setExtremeNonHover(true);
        } else if (difficulty === "Medium") {
            setMediumNonHover(false);
            setEasyNonHover(true);
            setHardNonHover(true);
            setExtremeNonHover(true);
        } else if (difficulty === "Hard") {
            setHardNonHover(false);
            setEasyNonHover(true);
            setMediumNonHover(true);
            setExtremeNonHover(true);
        } else if (difficulty === "Extreme") {
            setExtremeNonHover(false);
            setEasyNonHover(true);
            setMediumNonHover(true);
            setHardNonHover(true);
        }
    };

    const offHoverDifficulty = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setEasyNonHover(false);
        setMediumNonHover(false);
        setHardNonHover(false);
        setExtremeNonHover(false);
    };

  return (
    <div>
      <h1>Difficulty</h1>
      <div className="difficultyBox">
        <div
          onClick={(event) => {
            selectDifficulty(event, "Easy");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Easy")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
          className = {difficultyEasy ? "difficultyClicked" : "difficultyNotClicked"}
          id={easyNonHover ? "nonHover":""}
        >
          Easy
        </div>
        <div
          onClick={(event) => {
            selectDifficulty(event, "Medium");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Medium")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
            className = {difficultyMedium ? "difficultyClicked" : "difficultyNotClicked"}
            id={mediumNonHover ? "nonHover":""}
        >
          Medium
        </div>
        <div
          onClick={(event) => {
            selectDifficulty(event, "Hard");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Hard")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
            className = {difficultyHard ? "difficultyClicked" : "difficultyNotClicked"}
            id={hardNonHover ? "nonHover":""}
        >
          Hard
        </div>
        <div
          onClick={(event) => {
            selectDifficulty(event, "Extreme");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Extreme")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
            className = {difficultyExtreme ? "difficultyClicked" : "difficultyNotClicked"}
            id={extremeNonHover ? "nonHover":""}
        >
          Extreme
        </div>
      </div>
    </div>
  );
}
