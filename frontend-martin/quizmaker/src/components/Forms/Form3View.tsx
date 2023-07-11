import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

export default function Form3View() {

  const [country, setCountry] = React.useState<string>("");
  const [countrySet, setCountrySet] = React.useState<boolean>(false);
  const [invalidSelection, setInvalidSelection] = React.useState(false);
  const invalidSelectionTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const countryAdded = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
    console.log(country)
  }
  
  let countries: string[] = ["Sweden", "Norway", "Denmark", "Finland", "Iceland", "United Kingdom", "Germany", "France", "Spain", "Italy", "Greece", "Poland", "Russia", "United States", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "China", "Japan", "India", "Australia", "New Zealand", "South Africa", "Egypt", "Kenya", "Nigeria", "Ethiopia", "Tanzania", "Uganda", "Zimbabwe", "Other"];

  const selectCountry = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {

    // Clear the previous timeout to avoid memory leak
    if (invalidSelectionTimeout.current) clearTimeout(invalidSelectionTimeout.current);

    if (countries.includes(country) && !countrySet) {
      setCountrySet(true);
      setInvalidSelection(false);
    } else {
      setInvalidSelection(true);
      invalidSelectionTimeout.current = setTimeout(() => {
        setInvalidSelection(false);
      }
      , 500);

    }
  }

    // Clear the timeout when the component is unmounted to avoid memory leak
    React.useEffect(() => {
      return () => {
        if (invalidSelectionTimeout.current) clearTimeout(invalidSelectionTimeout.current);
      }
    }, []);


  return (
    <div>
      <h1>
        Participants Country of Origin
      </h1>
      <div className='form3'>
        <Autocomplete
          disablePortal
          id="countries"
          options={countries}
          sx={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="Pick a country" value={country} onChange={countryAdded}/>}
        />
        <div className={`${countrySet ? 'checkBoxClicked':'checkBox'} ${invalidSelection ? 'invalid-selection' : ''}`} onClick={selectCountry}><CheckIcon/></div>
      </div>
    </div>
);
}
