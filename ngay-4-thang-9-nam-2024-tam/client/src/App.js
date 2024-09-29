import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ProjectsList from "./components/ProjectsList";
import Board from "./components/Board";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-layout">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProjectsList />} />
            <Route path="/project/:projectId" element={<Board />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
