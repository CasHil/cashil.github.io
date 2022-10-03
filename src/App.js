import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HashRouter>
        <div class="flex flex-row flex-wrap py-4">
          <aside class="w-full sm:w-1/4 md:w-1/4 px-2">
            <div class="sticky top-0 p-4 w-full">
              <Header />
              <IntroLinks />
            </div>
          </aside>
          <div class="w-full sm:w-3/4 md:w-3/4 pt-1 px-2">
            <motion.div layoutId="underline">
              <Body />
            </motion.div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
