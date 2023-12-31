import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {MainRouter, ArchiveProjects, Home} from "./pages";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<MainRouter />} >
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/ArchiveProjects" element={<ArchiveProjects />} /> */}
            {/* <Route path="/demo" element={<Demo />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
