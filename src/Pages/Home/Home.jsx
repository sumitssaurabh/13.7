// import React from 'react'
import Signin from "../Signin/Signin";
// import SIng from "../Signin/SIng"
// import Signup from "../Signup/Signup"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
    // nav("/signin");
  console.log("home");
  return(
   <div>
     <Signin/>
  </div>)
};

export default Home;
