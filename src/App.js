import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex-column">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;


