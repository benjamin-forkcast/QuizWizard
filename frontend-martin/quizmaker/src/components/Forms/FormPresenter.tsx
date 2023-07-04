import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Form1View from "./Form1View";
import Form2View from "./Form2View";
import Form3View from "./Form3View";

export default function FormPresenter() {
  const [form1IsVisible, setForm1IsVisible] = useState(true);
  const [form2IsVisible, setForm2IsVisible] = useState(false);
  const [form3IsVisible, setForm3IsVisible] = useState(false);

  function toggle() {
    if (form1IsVisible) {
      setForm1IsVisible(false);
      setForm2IsVisible(true);
    } else if (form2IsVisible) {
      setForm2IsVisible(false);
      setForm3IsVisible(true);
    } else if (form3IsVisible) {
      setForm3IsVisible(false);
      setForm1IsVisible(true);
    }
  }

  return (
    <div className="forms-container">
      <div className="menuBar">
        <h1>Navbar to come</h1>
      </div>
      <div className="form">
        <AnimatePresence initial={false}>
          {form1IsVisible && (
            <motion.div
              key={1}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="questions"
            >
              <Form1View />
            </motion.div>
          )}
          {form2IsVisible && (
            <motion.div
              key={2}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="questions"
            >
              <Form2View />
            </motion.div>
          )}
          {form3IsVisible && (
            <motion.div
              key={3}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="questions"
            >
              <Form3View />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="navigate">
        <button onClick={toggle}>Next</button>
      </div>
    </div>
  );
}
