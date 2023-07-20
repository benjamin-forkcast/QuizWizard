import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Form2.css";

import TextField from "@mui/material/TextField";

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
};

export default function Form2View() {
  const [theme, setTheme] = React.useState("");
  const [filters, setFilters] = React.useState<Filter[]>([]);
  const [removeIconVisible, setRemoveIconVisible] =
    React.useState<boolean>(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  const handleFiltersChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (theme !== "" && event.key === "Enter") {
      const color = colors[Math.floor(Math.random() * colors.length)];
      setFilters([...filters, { theme, color }]);
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
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Quiz Theme - Press to delete</h1>
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
              className="bubble"
              style={{ backgroundColor: filter.color }}
              onMouseEnter={handleRemoveIconVisible}
              onMouseLeave={handleRemoveIconVisible}
            >
              {filter.theme}
              {<motion.button
                className="remove-icon"
                onClick={() => handleRemoveFilter(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                x
              </motion.button>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
