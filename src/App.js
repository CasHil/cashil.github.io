import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <div className="bg-gray-900 min-h-screen" id="outer-container">
      <BrowserRouter>
        <div className="block lg:hidden">
          <div className="flex flex-row text-white justify-end items-center pr-5 bg-black w-full h-14 fixed z-10 opacity-95">
            <b>Casper Hildebrand's portfolio</b>
          </div>
          <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
            <Header handleClick={() => handleCloseMenu()} />
          </Menu>
        </div>
        <div className="flex flex-row flex-wrap py-12" id="page-wrap">
          <aside className="w-full lg:w-1/4 sm:w-full px-2">
            <div className="sticky top-0 p-4 w-full">
              <IntroLinks />
              <div className="hidden lg:block">
                <Header />
              </div>
            </div>
          </aside>
          <div className="w-full lg:w-3/4 sm:w-full pt-1 px-2">
            <Body />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
