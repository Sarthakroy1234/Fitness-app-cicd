import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Reasons from "./components/Reasons/Reasons.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Join from "./components/Join/Join.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import GetStarted from "./components/GetStarted/Get.jsx";
import BMIcalculator from "./components/BMIcalculator/BMIcalculator"; // Import BMIcalculator
import CaloriesCalculator from "./components/CaloriesCalculator/CaloriesCalculator"; // Import CaloriesCalculator
import Points from './components/Programs/Points.jsx'
import { programsData } from './data/programsData.js'
import LearnMorePage from "./components/Hero/LearnMore.jsx";


function App() {
  // useEffect(()=>{
  //    console.log(programsData)
  // })
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/why" element={<Reasons />} />
          <Route path="/plan" element={<Plans />} />
          {programsData.map((e) => (
            <Route
              key={e.id}
              path={`/program/${e.id}`}
              element={<Points heading={e.heading} points={e.points} />}
            />
          ))}
          
          <Route path="/testi" element={<Testimonials />} />
          <Route path="/join" element={<Join />} />
          <Route path="/get" element={<GetStarted />} />
          <Route path="/bmi" element={<BMIcalculator />} />
          <Route path="/readmore" element={<Points />} />
          <Route path="/learn" element={<LearnMorePage/>} />
          <Route path="/calories" element={<CaloriesCalculator />} /> {/* Add this line for CaloriesCalculator */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
