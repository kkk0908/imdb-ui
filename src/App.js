import React from "react";
import {
  BrowserRouter as Router, Route, Routes

} from "react-router-dom";
import Header from './components/header/Header'
import Home from "./Pages/Home"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
