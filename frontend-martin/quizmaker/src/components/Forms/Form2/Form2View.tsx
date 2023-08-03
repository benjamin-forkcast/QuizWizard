import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Form2.css";

import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const colors = [
  "rgb(162, 57, 130)",
  "rgb(205, 58, 58)",
  "rgb(58, 205, 58)",
  "rgb(58, 58, 205)",
  "rgb(205, 205, 58)",
  "rgb(160, 82, 45)",
  "rgb(205, 58, 143)",
  "rgb(205, 102, 58)",
  "rgb(238, 232, 213)",
  "rgb(150, 150, 150)",
  "rgb(58, 205, 169)",
  "rgb(58, 58, 205)",
];

type Filter = {
  theme: string;
  color: string;
  showRemove: boolean;
};

type Form2ViewProps = {
  themes: string[];
  setThemes: (themes: string[]) => void;
};

export default function Form2View({
  themes,
  setThemes,
}: Form2ViewProps) {
  const [theme, setTheme] = React.useState("");
  const [filters, setFilters] = React.useState<Filter[]>(themes.map((theme) => ({ theme, color: colors[Math.floor(Math.random() * colors.length)], showRemove: false })));
  const [removeIconVisible, setRemoveIconVisible] =
    React.useState<boolean>(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  const handleFiltersChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (theme !== "" && event.key === "Enter") {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const newFilters = [...filters, { theme, color, showRemove: false }];
      setFilters(newFilters);
      // Directly derive themes from the new filters
      setThemes(newFilters.map((filter) => filter.theme));
      setTheme("");
    }
  };


  const handleRemoveIconVisible = () => {
    if (removeIconVisible === true) {
      setRemoveIconVisible(false);
    } else {
      setRemoveIconVisible(true);
    }
    console.log(removeIconVisible);
  };

  const handleRemoveFilter = (index: number) => {
    console.log(index);
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    console.log("filters ", filters);
    console.log("new filters ", newFilters);
    setFilters(newFilters);
    setThemes(newFilters.map((filter) => filter.theme));
  };

  const handleBubbleClick = (index: number) => {
    const newFilters = [...filters];
    newFilters[index].showRemove = !newFilters[index].showRemove;
    setFilters(newFilters);
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Quiz Theme</h1>
        <div>
          <TextField
            id="standard-basic"
            label="Pick a theme"
            variant="standard"
            value={theme}
            onChange={handleThemeChange}
            onKeyDown={handleFiltersChange}
            sx={{ width: "500px" }}
          />
        </div>
      </div>
      <div className="themes">
        <AnimatePresence initial={false}>
          {filters.map((filter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 0.6, scale: [0.5, 1.3, 1] }}
              exit={{ opacity: 0, scale: [1.1, 0.5] }}
              transition={{ type: "spring", stiffness: 100 }}
              className={filter.showRemove ? "bubbleRemove" : "bubble"}
              style={{ backgroundColor: filter.color }}
              onClick={() => handleBubbleClick(index)}
            >
               <div className="text-container">
                  <div className={`theme-text ${filter.showRemove ? 'hidden' : 'visible'}`}>{filter.theme}</div>
                  <IconButton className={`remove-text ${filter.showRemove ? 'visible' : 'hidden'}`}><HighlightOffIcon onClick={(event) => { event.stopPropagation(); if (filter.showRemove) {handleRemoveFilter(index)} }}/></IconButton>
                </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
