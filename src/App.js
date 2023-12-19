import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {MainRouter, Projects, Home} from "./pages";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<MainRouter />} >
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
