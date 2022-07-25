import { BrowserRouter, Routes, Route } from "react-router-dom";

// css
import "./css/reset.css";
import "./css/app.css";

// components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

export default function App() {
  const api = "https://nc-news-ae-solo.herokuapp.com/api";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage api={api} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
