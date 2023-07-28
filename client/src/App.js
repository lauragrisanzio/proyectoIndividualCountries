import React from "react";
import { Routes, BrowserRouter,Route, useLocation, useNavigate } from "react-router-dom";
import Detail from './views/detail/detail.component';
import Home from "./views/home/home.component.jsx";
import Create from './views/create/create.component';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:id" element={<Detail />}></Route>
          <Route path="/activity" element={<Create />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
