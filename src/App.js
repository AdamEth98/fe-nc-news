import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// css
import "./css/reset.css";
import "./css/app.css";

// components
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Topics from "./pages/Topics";
import ArticlesByTopic from "./pages/ArticlesByTopic";
import Article from "./pages/Article";

export default function App() {
  const [user, setUser] = useState("grumpy19");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/topics/:topic" element={<ArticlesByTopic />}></Route>
        <Route path="/article/:article_id" element={<Article user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
