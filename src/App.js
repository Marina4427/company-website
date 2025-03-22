import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Help from "./pages/help/help";
import About from "./pages/about/about";

import ScrollToTop from "./utils/scrollTotop";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Router basename="/company-website">
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
