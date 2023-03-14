
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import {Routes, Route, } from "react-router-dom";
import Navigate from "./components/Navigate"

function App() {
  return (
    <div >
    <Navigate/>
    <Routes>
    <Route  path="/"  element={ <Home/>}/>
    <Route path="/about"  element={ <About/>}/>
    <Route path="/projects"  element={<Projects/>}/>
    <Route path="/services"  element={<Services/>}/>
    <Route path="/Blog"  element={<Blog/>}/>
    <Route path="/Contact"  element={<Contact/> }/>
    </Routes>
    </div>
  );
}

export default App;
