import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
      <Header />
    </Router>
  );
}

export default App;
