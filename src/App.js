import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Hrms from "./pages/product/Hrms";
import Casacare from "./pages/product/Casacare";
import Law from "./pages/product/Law";
import Acadix from "./pages/product/Acadix";
import Footer from "./components/Footer";
import "./App.css";
import BlogDetails from "./pages/BlogDetails";
import PowerUtility from "./pages/product/PowerUtility";
import Mining from "./pages/product/Mining";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., API fetch or assets load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/human_resource" element={<Hrms />} />
        <Route path="/law_firm" element={<Law />} />
        <Route path="/case_care" element={<Casacare />} />
        <Route path="/acadix" element={<Acadix />} />
        <Route path="/power_utility" element={<PowerUtility />} />
        <Route path="/mining_operations" element={<Mining />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
