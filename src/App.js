import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgotpass" element={() => {
            window.location.href = "http://staging2.zipcoinremit.com/en/password/reset";
            return null;
          }} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
