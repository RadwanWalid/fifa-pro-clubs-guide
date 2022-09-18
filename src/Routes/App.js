import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LevelUp from "../Pages/LevelUp";
import SkillTree from "../Pages/SkillTree";
import Archetypes from "../Pages/Archetypes";
import Perks from "../Pages/Perks";
import PlayerBuild from "../Pages/PlayerBuild";
import Footer from "../Components/Footer";

function App() {
  return (
      <Router>
        <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/LevelUp' element={<LevelUp />}/>
              <Route path='/SkillTree' element={<SkillTree />}/>
              <Route path='/Archetypes' element={<Archetypes />}/>
              <Route path='/Perks' element={<Perks />}/>
              <Route path='/PlayerBuild/*' element={<PlayerBuild />}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
