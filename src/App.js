import "./App.css";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HashRouter>
        <Header />
        <Body />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
