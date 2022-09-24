import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home, History, Ginuwa, Warri, Royal, Press, Event, Speech, Account, } from "./components/pages";

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/ginuwa" element={<Ginuwa />} />
        <Route path="/warri" element={<Warri />} />
        <Route path="/royal" element={<Royal />} />
        <Route path="/press" element={<Press />} />
        <Route path="/event" element={<Event />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/login" element={<Account />} />
      </Routes>
      </>
  );
}

export default App;
