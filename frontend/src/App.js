import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.js";
import Inspirations from "./components/Inspirations/inspirations.js";
import Profile from "./components/Profile/profile.js";
import Favorites from "./components/Favorites/favorites.js";
import Upload from "./components/Upload/upload.js";
import SignIn from "./components/SignIn/signIn.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
