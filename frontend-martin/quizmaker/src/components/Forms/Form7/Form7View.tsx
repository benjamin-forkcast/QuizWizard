import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Form7.css";

import TextField from "@mui/material/TextField";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

type Form7ViewProps = {
    req: string;
    setReq: (request: string) => void;
};

export default function Form2View({
    req,
    setReq,
}: Form7ViewProps) {
  const [request, setRequest] = React.useState(req);
  const [requestSet, setRequestSet] = React.useState<boolean>(false);
  const [invalidSelection, setInvalidSelection] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const invalidSelectionTimeout = React.useRef<NodeJS.Timeout | null>(null);

    // only initial render
    React.useEffect(() => {
        if (req) {
            setRequestSet(true);
        }
    }, []);

  const handleRequestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest(event.target.value);
    setReq(event.target.value);
  };

  const selectRequest = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {

    // Clear the previous timeout to avoid memory leak
    if (invalidSelectionTimeout.current) clearTimeout(invalidSelectionTimeout.current);

    if (request && !requestSet) {
      setRequestSet(true);
      setInvalidSelection(false);
    } else if (requestSet) {
        setRequestSet(false);
        setRequest("");
        setReq("");
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

    const getInfo = () => {
        if (showInfo) {
            setShowInfo(false)
        } else {
            setShowInfo(true)
        }
    }

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Specific Request<IconButton><InfoIcon onClick={getInfo}/></IconButton>{showInfo ? <motion.p className='info' initial={{ scale: 0.1 }} animate={{ scale: 1 }} exit={{ scale: 0.1 }}>E.g. "Include LoTR references" or "At least one question about The Eiffel Tower"</motion.p> : ""}</h1>
        <div className="form7">
          {!requestSet ? <TextField
            id="outlined-multiline-flexible"
            label="Request Here"
            multiline
            value={request}
            onChange={handleRequestChange}
            sx={{ width: "500px" }}
          /> : 
          <motion.div
          key={7}
          className="setRequest"
          initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1 , scale: [0.8, 0.9, 1.03, 1] }} transition={{ duration: 0.5 }}>{request}</motion.div>}
          <div className={`${requestSet ? 'checkBoxClicked':'checkBox'} ${invalidSelection ? 'invalid-selection' : ''}`} onClick={selectRequest}>{!requestSet ? <CheckIcon/> : <EditIcon/>}</div>
        </div>
      </div>
    </div>
  );
}
