import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <BrowserRouter>
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/4 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full">
              <Header />
              <IntroLinks />
            </div>
          </aside>
          <div className="w-full sm:w-3/4 md:w-3/4 pt-1 px-2">
            <Body />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
