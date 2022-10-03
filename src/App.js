import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <BrowserRouter>
        <div className="flex flex-row flex-wrap py-12">
          <aside className="w-full lg:w-1/4 sm:w-full px-2">
            <div className="sticky top-0 p-4 w-full">
              <IntroLinks />
              <Header />
            </div>
          </aside>
          <div className="w-full lg:w-3/4 sm:w-4/4 pt-1 px-2">
            <Body />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
