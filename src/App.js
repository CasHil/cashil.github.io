import "./App.css";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HashRouter>
        <ul className="flex flex-row justify-around m-auto w-1/4 py-12">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/work-experience">Work experience</NavLink>
          </li>
        </ul>
        <div className="m-auto my-12 w-1/2">
          <img
            className="m-auto h-48 w-48 rounded-full mb-12"
            src={process.env.PUBLIC_URL + "images/profile.jpg"}
            alt="Profile"
          ></img>
          <Routes>
            <Route exact path="/" element={<Intro />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/work-experience" element={<WorkExperience />}></Route>
          </Routes>
        </div>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
