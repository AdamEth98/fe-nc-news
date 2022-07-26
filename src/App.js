import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/topics/:topic" element={<ArticlesByTopic />}></Route>
        <Route path="/article/:article_id" element={<Article />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
