import React, { useState } from "react";
import "./SignIn.css"; // Include CSS for styling

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth">
      <div
        className={`auth-container ${
          isSignIn ? "sign-in-mode" : "sign-up-mode"
        }`}
      >
        <div className="auth-container">
          <form className="auth-form sign-in-form">
            <h2>Sign In</h2>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <a href="/" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="auth-container">
          <form className="auth-form sign-up-form">
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="signin-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2>Hello there!</h2>
              <p>Start your journey with us by creating an account.</p>
              <button className="auth-btn" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2>Welcome Back!</h2>
              <p>To stay connected, please sign in to your account.</p>
              <button className="auth-btn" onClick={toggleForm}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
