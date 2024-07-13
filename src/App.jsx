import { useState } from "react";
import "./App.css";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
// import {  } from react-router-dom
import {BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Forgot_password from "./Pages/ForgotPassword/Forgot_password";

function App() {
  return (
    <div className="flex justify-center container_app">
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/forgot_password" element={<Forgot_password/>} />
        {/* <Route path="/" exact component={Signin} /> Default route */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
