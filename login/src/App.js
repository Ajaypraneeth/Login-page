import React from "react";
import "./App.css";
import { Route, Routes, } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;