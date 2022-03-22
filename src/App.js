import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HashRouter>
        <Header />
        <Body />
      </HashRouter>
    </div>
  );
}

export default App;
