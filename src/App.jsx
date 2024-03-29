import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
