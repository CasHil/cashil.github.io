import "./App.css";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ul className="header">
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
        <Routes className="content">
          <Route exact path="/" element={<Intro />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/work-experience" element={<WorkExperience />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
