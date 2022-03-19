import "./App.css";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";

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
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Intro />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/work-experience" element={<WorkExperience />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
