import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Posts from "@/pages/Posts";
import Authors from "@/pages/Authors";
import PostDetails from "@/pages/PostDetails";
import Footer from "@/components/ui/Footer";

import AppBar from "@/components/ui/AppBar";

export default function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/postdetails" element={<PostDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
