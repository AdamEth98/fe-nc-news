import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// css
import "./css/reset.css";
import "./css/app.css";

// components
import Navbar from "./components/Navbar";

// pages
import Homepage from "./pages/Homepage";
import Topics from "./pages/Topics";
import ArticlesByTopic from "./pages/ArticlesByTopic";
import Article from "./pages/Article";
import BadRoute from "./pages/BadRoute";

export default function App() {
  const [user] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        <Route path="/article/:article_id" element={<Article user={user} />} />
        <Route path="*" element={<BadRoute title="404: Page not found." />} />
      </Routes>
    </BrowserRouter>
  );
}
