import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClickSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen" id="outer-container">
      <BrowserRouter>
        <div className="block lg:hidden">
          <div className="flex flex-row text-white justify-between items-center px-4 bg-gray-800 w-full h-14 fixed z-20 opacity-95">
            <button
              type="button"
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <b>Casper Hildebrand's portfolio</b>
          </div>

          {/* Drawer backdrop */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/60 z-30 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Drawer menu */}
          <div
            className={`fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-gray-900 z-40 p-6 pt-16 shadow-2xl transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Header handleClick={handleMenuClickSidebar} />
          </div>
        </div>
        <div className="flex flex-row flex-wrap py-12" id="page-wrap">
          <aside className="w-full lg:w-1/4 sm:w-full px-2">
            <div className="sticky top-6 p-4 w-full">
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
