import React, { useState } from "react";

import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LogoHeader from "../../components/common/Logo/LogoHeaderG1";
import Button_ from "../../components/common/Button/Button";
import Button from "react-bootstrap/Button";
import googleLogo from "../../assets/photo/google_img.png";
import Right_img from "../../components/layout/Rightside/Right_side";
import LanguageSelector from "../../components/common/Language/LanguageSelector";
import WelcomeMessage from "../../components/common/Logo/WelcomeMessage";
import Divider from "../../../src/components/layout/Divider/Divider";
import "./Signin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Right_side from "../../components/layout/Rightside/Right_side";
import Checkbox_with_words from "../../components/layout/Checkbox_with_words/Checkbox_with_words";
import Link_ from "../../components/layout/Link/Link_";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Signin = () => {
  const [showGoogleSignup, setShowGoogleSignup] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRemembered, setIsRemembered] = useState(false);
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const { credential } = response;
      const result = await axios.get(`/auth/google/callback?token=${credential}`);
      const token = result.data.token;
      localStorage.setItem('jwt', token);
      // Redirect or perform further actions
    } catch (error) {
      console.error('Google login failed', error);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    // <GoogleOAuthProvider clientId="your_google_client_id">
    <div className="flex flex-col w-full h-screen lg:flex-row">
      <div className="flex-col justify-center mt-3.5 p-8 lg:w-1/2">
        {/* flex flex-col justify-center p-8 bg-gray-100 lg:w-1/2 */}
        <LanguageSelector />
        <br />
        <LogoHeader />
        <WelcomeMessage
          cls="text-2xl font-semibold mt-4"
          text="Hi, Welcome Back!"
        />
        <br />
        {showGoogleSignup && (
          <Button_
            className="mt-4"
            logo={googleLogo}
            backgroundColor="white"
            textColor="black"
            border="1px solid black"
            text="Sign in with Google"
            // onClick={handleGoogleSignup}
            // onSuccess={handleGoogleLoginSuccess}
            // onError={() => {
            //   console.log('Login Failed');
            // }}
            // useOneTap
          />
        )}

        <Divider
          cls=" text-sm font-semibold my-4  ml-[12vw] relative "
          text="or sign in with E-mail !"
        />
        {/* <div className=" ml-3.5 my-4 text-sm font-semibold">or sign in with Email</div> */}
        <label htmlFor="email" className="block my-4 text-sm text-gray-500">
          Email
        </label>
        <div className="relative flex items-center w-full ">
          <MdOutlineMail className="absolute text-gray-500 left-3" />
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleEmailChange}
            className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
            placeholder="Email"
          />
        </div>
        {/* {emailError && <div className="mt-1 text-sm text-red-500">{emailError}</div>} */}
        <label htmlFor="password" className="block my-4 text-sm text-gray-500 ">
          Password
        </label>
        <div className="relative flex items-center w-full mt-1">
          <RiLockPasswordLine className="absolute text-gray-500 left-3" />
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handlePasswordChange}
            className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
            placeholder="Password"
          />
           <span
          onClick={togglePasswordVisibility}
          className="absolute cursor-pointer right-3 top-3"
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
        </div>

        <br />
        <div className="flex">
          <Checkbox_with_words
            onCheckboxChange={setIsRemembered}
            label="Remember Me"
            cls="m-1 text-blue-700"
            // className="text-blue-700"
          />

          <Link_
          to="/forgot-password"
            label=""
            linkText="Forgot your password?"
            href="/"
            className="forgot_password text-blue-700 cursor-pointer"
             linkUrl="/forgot_password"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          // disabled={!isChecked}
          className="w-full my-2  button_signup"
        >
          Sign in
        </Button>

        <Link_
          to="/signup"
          linkText="Create an Account"
          cls="text-zinc-700"
          label="Not Register Yet ? "
          // href="/src/Pages/Signin/Signin.jsx"
          text=""
          linkUrl="/signup"
        />
      </div>
      <div className="flex items-center justify-center w-full bg-gray-200 right_side lg:w-1/2">
        {/* <Right_img /> */}
        <Right_side
          imageSrc={Right_img}
          altText="Description of the image"
          className="custom-size-class"
        />{" "}
      </div>
    </div>
    // </GoogleOAuthProvider>
  );
};

export default Signin;
