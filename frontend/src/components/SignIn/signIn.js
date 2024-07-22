// import React, { useState } from "react";
// import "./SignIn.css"; // Include CSS for styling
// import { sendAuthRequest } from "../api-helpers/helpers";
// import { useDispatch } from "react-redux";
// import { authActions } from "../../store";

// const SignInSignUp = () => {
//   const dispatch = useDispatch();

//   const [isSignUp, setIsSignUp] = useState(false);

//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const authAction = isSignUp
//       ? sendAuthRequest(true, inputs)
//       : sendAuthRequest(false, inputs);

//     authAction
//       .then((data) => {
//         console.log(data); // Log the entire response data for debugging
//         dispatch(authActions.login());
//         const userId = data.user ? data.user._id : data.id; // Check for user object in response for sign-up
//         if (userId) {
//           localStorage.setItem("userId", userId);
//         } else {
//           console.error("User ID not found in the response");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="auth">
//       <div
//         className={`auth-container ${
//           isSignUp ? "sign-up-mode" : "sign-in-mode"
//         }`}
//       >
//         <div className="auth-container">
//           <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
//             <h2>Log In</h2>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 name="email"
//                 value={inputs.email}
//                 onChange={handleChange}
//                 type="email"
//                 id="email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 name="password"
//                 value={inputs.password}
//                 onChange={handleChange}
//                 type="password"
//                 id="password"
//                 required
//               />
//             </div>
//             <a href="/" className="forgot-password">
//               Forgot Password?
//             </a>
//             <button type="submit" className="signin-btn">
//               Log In
//             </button>
//           </form>
//         </div>
//         <div className="auth-container">
//           <form onSubmit={handleSubmit} className="auth-form sign-up-form">
//             <h2>Sign Up</h2>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input
//                 name="username"
//                 value={inputs.username}
//                 onChange={handleChange}
//                 type="text"
//                 id="username"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 name="email"
//                 value={inputs.email}
//                 onChange={handleChange}
//                 type="email"
//                 id="email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 name="password"
//                 value={inputs.password}
//                 onChange={handleChange}
//                 type="password"
//                 id="password"
//                 required
//               />
//             </div>
//             <button type="submit" className="signin-btn">
//               Sign Up
//             </button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h2>Hello there!</h2>
//               <p>Start your journey with us by creating an account.</p>
//               <button className="auth-btn" onClick={toggleForm}>
//                 Sign Up
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h2>Welcome Back!</h2>
//               <p>To stay connected, please log in to your account.</p>
//               <button className="auth-btn" onClick={toggleForm}>
//                 Log In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInSignUp;

import React, { useState } from "react";
import "./SignIn.css"; // Include CSS for styling
import { sendAuthRequest } from "../api-helpers/helpers";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";

const SignInSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const authAction = isSignUp
      ? sendAuthRequest(true, inputs)
      : sendAuthRequest(false, inputs);

    authAction
      .then((data) => {
        console.log(data); // Log the entire response data for debugging
        dispatch(authActions.login());
        const userId = data.user ? data.user._id : data.id; // Check for user object in response for sign-up
        if (userId) {
          localStorage.setItem("userId", userId);
        } else {
          console.error("User ID not found in the response");
        }
        navigate("/"); // Redirect to homepage after login/signup
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Header
        classNameheader="login-header"
        classNamelogo="login-logo"
        classNamenav="login-nav"
        classNamesignin="login-signin"
      />
      <div className="auth">
        <div
          className={`auth-container ${
            isSignUp ? "sign-up-mode" : "sign-in-mode"
          }`}
        >
          <div className="auth-container">
            <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
              <h2>Log In</h2>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  required
                />
              </div>
              <a href="/" className="forgot-password">
                Forgot Password?
              </a>
              <button type="submit" className="signin-btn">
                Log In
              </button>
            </form>
          </div>
          <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form sign-up-form">
              <h2>Sign Up</h2>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  type="text"
                  id="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  required
                />
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
                <p>To stay connected, please log in to your account.</p>
                <button className="auth-btn" onClick={toggleForm}>
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
