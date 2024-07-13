import React, { useState, useRef, useEffect } from "react";
import LogoHeader from "../../components/common/Logo/LogoHeaderG1";
import Right_side from "../../components/layout/Rightside/Right_side";
import WelcomeMessage from "../../components/common/Logo/WelcomeMessage";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "react-bootstrap";
import axios from 'axios';

const Forgot_password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isOtpButtonVisible, setIsOtpButtonVisible] = useState(false);
  const [isOtpInputVisible, setIsOtpInputVisible] = useState(false);
  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);

  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (validateEmail(emailValue)) {
      setEmailError("");
      setIsOtpButtonVisible(true);
    } else {
      setEmailError("Enter a valid E-mail id.");
      setIsOtpButtonVisible(false);
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value) || value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      otpRefs[index + 1].current.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      setOtpError("");
      setIsPasswordInputVisible(true);
    } else {
      setOtpError("Enter a valid 4-digit OTP.");
      setIsPasswordInputVisible(false);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (index > 0 && newOtp[index] === "") {
        otpRefs[index - 1].current.focus();
        newOtp[index - 1] = "";
      } else {
        newOtp[index] = "";
      }
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('Text').split('');
    if (pastedData.length === otp.length && pastedData.every(char => !isNaN(char))) {
      setOtp(pastedData);
      otpRefs[otpRefs.length - 1].current.focus();
      setOtpError("");
      setIsPasswordInputVisible(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password validation logic here if needed
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-otp', { email });
      if (response.data.message) {
        setIsOtpInputVisible(true);
      }
    } catch (error) {
      setEmailError('Failed to send OTP, please try again.');
    }
  };

  useEffect(() => {
    if (isOtpInputVisible) {
      otpRefs[0].current.focus();
    }
  }, [isOtpInputVisible]);

  return (
    <div className="flex flex-col w-full h-screen lg:flex-row">
      <div className="flex-col justify-center mt-16 p-8 lg:w-1/2">
        <LogoHeader />
        <WelcomeMessage
          cls="text-2xl font-semibold mt-8"
          text="Reset Your Password Here!"
        />
        <br />
        <label htmlFor="email" className="block my-4 mt-1.5 text-sm text-gray-500">
          Email
        </label>
        <div className="relative flex items-center w-full">
          <MdOutlineMail className="absolute text-gray-500 left-3" />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
            placeholder="Email"
          />
        </div>
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
        {isOtpButtonVisible && (
          <div className="mt-4">
            <button
              className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-green-500"
              onClick={sendOtp}
            >
              Send OTP
            </button>
          </div>
        )}

        {isOtpInputVisible && (
          <div className="mt-4">
            <label htmlFor="otp" className="block text-sm text-gray-500">
              OTP
            </label>
            <div className="flex mt-1" onPaste={handlePaste}>
              {Array.from({ length: 4 }, (_, index) => (
                <input
                  key={index}
                  type="text"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={otpRefs[index]}
                  maxLength={1}
                  className="w-12 h-12 text-center border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
                  placeholder=" _ "
                />
              ))}
            </div>
            {otpError && (
              <p className="text-red-500 text-sm mt-1">{otpError}</p>
            )}
          </div>
        )}
        {isPasswordInputVisible && (
          <>
            <label htmlFor="password" className="block my-4 text-sm text-gray-500">
              New Password
            </label>
            <div className="relative flex items-center w-full mt-1">
              <RiLockPasswordLine className="absolute text-gray-500 left-3" />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
                placeholder="New Password"
              />
            </div>
            <br />
            <label htmlFor="confirm_password" className="block text-sm text-gray-500">
              Confirm Password
            </label>
            <div className="relative flex items-center w-full mt-1">
              <RiLockPasswordLine className="absolute text-gray-500 left-3"/>
              <input
                type="password"
                name="confirm_password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
                placeholder="Confirm Password"
              />
               <span
          onClick={togglePasswordVisibility}
          className="absolute cursor-pointer right-3 top-3"
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
            </div>
          </>
        )}
        {isPasswordInputVisible && (
          <Button
            type="submit"
            variant="primary"
            className="w-full my-6 button_signup"
            onClick={handleSubmit}
          >
            Reset Password
          </Button>
        )}
      </div>
      <div className="flex items-center justify-center w-full bg-gray-200 right_side lg:w-1/2">
        <Right_side
          altText="Description of the image"
          className="custom-size-class"
        />
      </div>
    </div>
  );
};

export default Forgot_password;


