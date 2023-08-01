import React from "react";
import { Routes,Route, useLocation, useNavigate, BrowserRouter } from "react-router-dom";
import Detail from './views/detail/detail.component';
import Home from "./views/home/home.component.jsx";
import Create from './views/create/create.component';

import './App.css';

function App() {
  return (
    <div className="App">
  
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:id" element={<Detail />}></Route>
          <Route path="/activity" element={<Create />}></Route>
        </Routes>

    </div>
  );
}

export default App;
