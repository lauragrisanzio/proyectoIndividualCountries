import React from "react";
import { Routes,Route, useLocation, useNavigate, BrowserRouter } from "react-router-dom";
import Detail from './views/detail/detail.component';
import Home from "./views/home/home.component.jsx";
import Form from './views/form/form.component';
import Landing from "./views/landing/landing.component";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* {pathname !== "/" && <Nav exit={exit} onSearch={onSearch} />} */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route path="/activity" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
