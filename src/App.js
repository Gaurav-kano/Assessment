import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Generator from "./Pages/Generator";
import Fact from "./Pages/Fact";
import cat from "./Pages/cat.png";

//https://cataas.com/cat?json=true
function App() {
  return (
    <div>
      <Router>
        <div className="navBar">
          <div className="navMenu">
            <NavLink to="/">
              <img src={cat} width="80px" height="80px"></img>
            </NavLink>
            <div className="break">
              <NavLink className="a" to="/">
                Home
              </NavLink>
              <NavLink className="a" to="/fact">
                Fact
              </NavLink>
              <NavLink className="a" to="/generator">
                Generator
              </NavLink>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fact" element={<Fact />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
