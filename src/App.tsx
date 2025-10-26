import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Portfolio } from "./Pages/Portfolio";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-300">
        <div className="sticky top-0 py-4 flex justify-center">
          <NavBar />
        </div>
        <div className="lg:mx-20 px-4 py-16">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="text-center mt-16 text-zinc-400">
            <p>
              &copy; {new Date().getFullYear()} Zac Darmoise. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;