import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import UserDetails from "./userDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdetail/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
