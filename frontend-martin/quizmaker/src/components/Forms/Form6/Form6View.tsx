import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import './Form6.css'

export default function Form6View() {
  const [vibe, setVibe] = useState<string>("");
  const [vibeFunny, setVibeFunny] = useState<boolean>(false);
  const [vibeFormal, setVibeFormal] = useState<boolean>(false);
  const [vibeEducational, setVibeEducational] = useState<boolean>(false);

  const [funnyNonHover, setFunnyNonHover] = useState<boolean>(false);
const [formalNonHover, setFormalNonHover] = useState<boolean>(false);
const [educationalNonHover, setEducationalNonHover] = useState<boolean>(false);

  const selectVibe = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    vibe: string
    ) => {
        setVibe(vibe);
        if (vibe === "Funny") {
            if (vibeFunny) {
                setVibeFunny(false);
                setVibe("");
            }
            else {
                setVibeFunny(true);
                setVibe("Funny");
            }
            setVibeFormal(false);
            setVibeEducational(false);
        } else if (vibe === "Formal") {
            if (vibeFormal) {
                setVibeFormal(false);
                setVibe("");
            }
            else {
                setVibeFormal(true);
                setVibe("Formal");
            }
            setVibeFunny(false);
            setVibeEducational(false);
        } else if (vibe === "Educational") {
            if (vibeEducational) {
                setVibeEducational(false);
                setVibe("");
            }
            else {
                setVibeEducational(true);
                setVibe("Educational");
            }
            setVibeFunny(false);
            setVibeFormal(false);
        }
    };

    const hoverDifficulty = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        vibe: string
    ) => {
        if (vibe === "Funny") {
            setFunnyNonHover(false);
            setFormalNonHover(true);
            setEducationalNonHover(true);
        } else if (vibe === "Formal") {
            setFormalNonHover(false);
            setFunnyNonHover(true);
            setEducationalNonHover(true);
        } else if (vibe === "Educational") {
            setEducationalNonHover(false);
            setFunnyNonHover(true);
            setFormalNonHover(true);
        }
    };

    const offHoverDifficulty = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setFunnyNonHover(false);
        setFormalNonHover(false);
        setEducationalNonHover(false);
    };

  return (
    <div>
      <h1>Vibe</h1>
      <div className="vibeBox">
        <div
          onClick={(event) => {
            selectVibe(event, "Funny");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Funny")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
          className = {vibeFunny ? "vibeClicked" : "vibeNotClicked"}
          id={funnyNonHover ? "nonHover":""}
        >
          Funny
        </div>
        <div
          onClick={(event) => {
            selectVibe(event, "Formal");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Formal")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
            className = {vibeFormal ? "vibeClicked" : "vibeNotClicked"}
            id={formalNonHover ? "nonHover":""}
        >
          Formal
        </div>
        <div
          onClick={(event) => {
            selectVibe(event, "Educational");
          }}
          onMouseEnter={(event) => {hoverDifficulty(event, "Educational")}}
          onMouseLeave={(event) => {offHoverDifficulty(event)}}
            className = {vibeEducational ? "vibeClicked" : "vibeNotClicked"}
            id={educationalNonHover ? "nonHover":""}
        >
          Educational
        </div>
      </div>
    </div>
  );
}
