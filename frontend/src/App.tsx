import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "@/pages/Home";
import Posts from "@/pages/Posts";
import Authors from "@/pages/Authors";
import PostDetails from "@/pages/PostDetails";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/postdetails" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}
