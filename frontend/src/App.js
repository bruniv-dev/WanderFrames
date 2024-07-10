import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.js";
import Insiprations from "./components/Inspirations/inspirations.js";
import Profile from "./components/Profile/profile.js";
import Favorites from "./components/Favorites/favorites.js";
import Upload from "./components/Upload/upload.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element=<Home /> />
          <Route path="/profile" element=<Profile /> />
          <Route path="/upload" element=<Upload /> />
          <Route path="/inspirations" element=<Insiprations /> />
          <Route path="/favorites" element=<Favorites /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
