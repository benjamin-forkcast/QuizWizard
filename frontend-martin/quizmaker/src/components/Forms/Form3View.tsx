import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Form3View() {

  let countries: string[] = ["Sweden", "Norway", "Denmark", "Finland", "Iceland", "United Kingdom", "Germany", "France", "Spain", "Italy", "Greece", "Poland", "Russia", "United States", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "China", "Japan", "India", "Australia", "New Zealand", "South Africa", "Egypt", "Kenya", "Nigeria", "Ethiopia", "Tanzania", "Uganda", "Zimbabwe", "Other"];

  return (
    <div>
      <h1>
        Participants country of origin
      </h1>
      <div>
        <Autocomplete
          disablePortal
          id="countries"
          options={countries}
          // sx={{ height: 100 }}
          renderInput={(params) => <TextField {...params} label="Pick a country"/>}
        />
      </div>
    </div>
);
}
