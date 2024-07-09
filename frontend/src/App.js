import Header from "./components/Header/header.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.js";
import Insiprations from "./components/Inspirations/inspirations.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element=<Home /> />
          <Route path="/inspirations" element=<Insiprations /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
