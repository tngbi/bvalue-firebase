import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 p-4 shadow-md">
          <div className="flex justify-center space-x-6">
            <Link className="text-white font-semibold hover:text-gray-300" to="/">Home</Link>
            <Link className="text-white font-semibold hover:text-gray-300" to="/dashboard">Dashboard</Link>
            <Link className="text-white font-semibold hover:text-gray-300" to="/about">About</Link>
            <Link className="text-white font-semibold hover:text-gray-300" to="/services">Services</Link>
            <Link className="text-white font-semibold hover:text-gray-300" to="/blog">Blog</Link>
            <Link className="text-white font-semibold hover:text-gray-300" to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
