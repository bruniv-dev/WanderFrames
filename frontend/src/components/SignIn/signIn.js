// // // import React, { useState, useEffect } from "react";
// // // import "./SignIn.css"; // Include CSS for styling
// // // import { sendAuthRequest } from "../api-helpers/helpers";
// // // import { useDispatch } from "react-redux";
// // // import { authActions } from "../../store";
// // // import { useNavigate } from "react-router-dom";
// // // import Header from "../Header/header";

// // // const SignInSignUp = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const [isSignUp, setIsSignUp] = useState(false);

// // //   const [inputs, setInputs] = useState({
// // //     username: "",
// // //     email: "",
// // //     password: "",
// // //   });

// // //   // Reset form fields when toggling forms
// // //   useEffect(() => {
// // //     setInputs({
// // //       username: "",
// // //       email: "",
// // //       password: "",
// // //     });
// // //   }, [isSignUp]);

// // //   const toggleForm = () => {
// // //     setIsSignUp(!isSignUp);
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     const authAction = isSignUp
// // //       ? sendAuthRequest(true, inputs) // Sign up
// // //       : sendAuthRequest(false, inputs); // Log in

// // //     authAction
// // //       .then((data) => {
// // //         console.log(data); // Log the entire response data for debugging

// // //         if (isSignUp) {
// // //           // On sign-up, show a success message and prompt for login
// // //           alert("Sign-up successful! Please log in.");
// // //           setIsSignUp(false); // Switch to the login form
// // //         } else {
// // //           // On sign-in, dispatch login action and navigate
// // //           dispatch(authActions.login());
// // //           const userId = data.user ? data.user._id : data.id; // Check for user object in response for sign-in
// // //           if (userId) {
// // //             localStorage.setItem("userId", userId);
// // //             navigate("/"); // Redirect to homepage after login
// // //           } else {
// // //             console.error("User ID not found in the response");
// // //           }
// // //         }
// // //       })
// // //       .catch((err) => console.log(err));
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setInputs((prevState) => ({
// // //       ...prevState,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   return (
// // //     <>
// // //       <Header
// // //         classNameheader="login-header"
// // //         classNamelogo="login-logo"
// // //         classNamenav="login-nav"
// // //         classNamesignin="login-signin"
// // //       />
// // //       <div className="auth">
// // //         <div
// // //           className={`auth-container ${
// // //             isSignUp ? "sign-up-mode" : "sign-in-mode"
// // //           }`}
// // //         >
// // //           <div className="auth-container">
// // //             {/* Sign-In Form */}
// // //             {!isSignUp && (
// // //               <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
// // //                 <h2>Log In</h2>
// // //                 <div className="form-group">
// // //                   <label htmlFor="email">Email:</label>
// // //                   <input
// // //                     name="email"
// // //                     value={inputs.email}
// // //                     onChange={handleChange}
// // //                     type="email"
// // //                     id="email"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label htmlFor="password">Password:</label>
// // //                   <input
// // //                     name="password"
// // //                     onChange={handleChange}
// // //                     type="password"
// // //                     id="password"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <a href="/" className="forgot-password">
// // //                   Forgot Password?
// // //                 </a>
// // //                 <button type="submit" className="signin-btn">
// // //                   Log In
// // //                 </button>
// // //               </form>
// // //             )}
// // //           </div>
// // //           <div className="auth-container">
// // //             {/* Sign-Up Form */}
// // //             {isSignUp && (
// // //               <form onSubmit={handleSubmit} className="auth-form sign-up-form">
// // //                 <h2>Sign Up</h2>
// // //                 <div className="form-group">
// // //                   <label htmlFor="username">Username:</label>
// // //                   <input
// // //                     name="username"
// // //                     onChange={handleChange}
// // //                     type="text"
// // //                     id="username"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label htmlFor="email">Email:</label>
// // //                   <input
// // //                     name="email"
// // //                     onChange={handleChange}
// // //                     type="email"
// // //                     id="email"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label htmlFor="password">Password:</label>
// // //                   <input
// // //                     name="password"
// // //                     onChange={handleChange}
// // //                     type="password"
// // //                     id="password"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <button type="submit" className="signin-btn">
// // //                   Sign Up
// // //                 </button>
// // //               </form>
// // //             )}
// // //           </div>
// // //           <div className="overlay-container">
// // //             <div className="overlay">
// // //               <div className="overlay-panel overlay-left">
// // //                 <h2>Hello there!</h2>
// // //                 <p>Start your journey with us by creating an account.</p>
// // //                 <button className="auth-btn" onClick={toggleForm}>
// // //                   Sign Up
// // //                 </button>
// // //               </div>
// // //               <div className="overlay-panel overlay-right">
// // //                 <h2>Welcome Back!</h2>
// // //                 <p>To stay connected, please log in to your account.</p>
// // //                 <button className="auth-btn" onClick={toggleForm}>
// // //                   Log In
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default SignInSignUp;

// // // import React, { useState, useEffect } from "react";
// // // import "./SignIn.css"; // Include CSS for styling
// // // import { sendAuthRequest } from "../api-helpers/helpers";
// // // import { useDispatch } from "react-redux";
// // // import { authActions } from "../../store";
// // // import { useNavigate } from "react-router-dom";
// // // import Header from "../Header/header";

// // // const SignInSignUp = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const [isSignUp, setIsSignUp] = useState(false);

// // //   const [inputs, setInputs] = useState({
// // //     username: "",
// // //     email: "",
// // //     password: "",
// // //   });

// // //   // Reset form fields when toggling forms
// // //   useEffect(() => {
// // //     setInputs({
// // //       username: "",
// // //       email: "",
// // //       password: "",
// // //     });
// // //   }, [isSignUp]);

// // //   const toggleForm = () => {
// // //     setIsSignUp(!isSignUp);
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     const authAction = isSignUp
// // //       ? sendAuthRequest(true, inputs) // Sign up
// // //       : sendAuthRequest(false, inputs); // Log in

// // //     authAction
// // //       .then((data) => {
// // //         console.log(data); // Log the entire response data for debugging

// // //         if (isSignUp) {
// // //           // On sign-up, show a success message and prompt for login
// // //           alert("Sign-up successful! Please log in.");
// // //           setIsSignUp(false); // Switch to the login form
// // //         } else {
// // //           // On sign-in, dispatch login action and navigate
// // //           dispatch(authActions.login());
// // //           const userId = data.user ? data.user._id : data.id; // Check for user object in response for sign-in
// // //           if (userId) {
// // //             localStorage.setItem("userId", userId);
// // //             navigate("/"); // Redirect to homepage after login
// // //           } else {
// // //             console.error("User ID not found in the response");
// // //           }
// // //         }
// // //       })
// // //       .catch((err) => console.log(err));
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setInputs((prevState) => ({
// // //       ...prevState,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleForgotPassword = () => {
// // //     navigate("/forgot-password");
// // //   };

// // //   return (
// // //     <>
// // //       <Header
// // //         classNameheader="login-header"
// // //         classNamelogo="login-logo"
// // //         classNamenav="login-nav"
// // //         classNamesignin="login-signin"
// // //       />
// // //       <div className="auth">
// // //         <div
// // //           className={`auth-container ${
// // //             isSignUp ? "sign-up-mode" : "sign-in-mode"
// // //           }`}
// // //         >
// // //           <div className="auth-container">
// // //             {/* Sign-In Form */}
// // //             {!isSignUp && (
// // //               <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
// // //                 <h2>Log In</h2>
// // //                 <div className="form-group">
// // //                   <label htmlFor="email">Email:</label>
// // //                   <input
// // //                     name="email"
// // //                     value={inputs.email}
// // //                     onChange={handleChange}
// // //                     type="email"
// // //                     id="email"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label htmlFor="password">Password:</label>
// // //                   <input
// // //                     name="password"
// // //                     onChange={handleChange}
// // //                     type="password"
// // //                     id="password"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <button
// // //                   type="button"
// // //                   className="forgot-password"
// // //                   onClick={handleForgotPassword}
// // //                 >
// // //                   Forgot Password?
// // //                 </button>
// // //                 <button type="submit" className="signin-btn">
// // //                   Log In
// // //                 </button>
// // //               </form>
// // //             )}
// // //           </div>
// // //           <div className="auth-container">
// // //             {/* Sign-Up Form */}
// // //             {isSignUp && (
// // //               <form onSubmit={handleSubmit} className="auth-form sign-up-form">
// // //                 <h2>Sign Up</h2>
// // //                 <div className="form-group">
// // //                   <label htmlFor="username">Username:</label>
// // //                   <input
// // //                     name="username"
// // //                     onChange={handleChange}
// // //                     type="text"
// // //                     id="username"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label htmlFor="email">Email:</label>
// // //                   <input
// // //                     name="email"
// // //                     onChange={handleChange}
// // //                     type="email"
// // //                     id="email"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label htmlFor="password">Password:</label>
// // //                   <input
// // //                     name="password"
// // //                     onChange={handleChange}
// // //                     type="password"
// // //                     id="password"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <button type="submit" className="signin-btn">
// // //                   Sign Up
// // //                 </button>
// // //               </form>
// // //             )}
// // //           </div>
// // //           <div className="overlay-container">
// // //             <div className="overlay">
// // //               <div className="overlay-panel overlay-left">
// // //                 <h2>Hello there!</h2>
// // //                 <p>Start your journey with us by creating an account.</p>
// // //                 <button className="auth-btn" onClick={toggleForm}>
// // //                   Sign Up
// // //                 </button>
// // //               </div>
// // //               <div className="overlay-panel overlay-right">
// // //                 <h2>Welcome Back!</h2>
// // //                 <p>To stay connected, please log in to your account.</p>
// // //                 <button className="auth-btn" onClick={toggleForm}>
// // //                   Log In
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default SignInSignUp;

// // // src/components/SignInSignUp/SignInSignUp.js
// // import React, { useState, useEffect } from "react";
// // import "./SignIn.css";
// // import { useDispatch } from "react-redux";
// // import { authActions } from "../../store";
// // import { useNavigate } from "react-router-dom";
// // import Header from "../Header/header";
// // import { loginUser } from "../api-helpers/helpers";

// // const SignInSignUp = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [isSignUp, setIsSignUp] = useState(false);

// //   const [inputs, setInputs] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     securityQuestion: "",
// //     securityAnswer: "",
// //   });

// //   useEffect(() => {
// //     setInputs({
// //       username: "",
// //       email: "",
// //       password: "",
// //       securityQuestion: "",
// //       securityAnswer: "",
// //     });
// //   }, [isSignUp]);

// //   const toggleForm = () => {
// //     setIsSignUp(!isSignUp);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const data = await loginUser(inputs); // Call the API helper function
// //       const { userId, isAdmin, role } = data;
// //       console.log(data);

// //       // Store userId and isAdmin status in localStorage
// //       localStorage.setItem("userId", userId);
// //       localStorage.setItem("isAdmin", isAdmin.toString());
// //       localStorage.setItem("role", role);

// //       // Dispatch login action with isAdmin payload
// //       dispatch(authActions.login({ isAdmin }));
// //       navigate("/"); // Redirect to appropriate page
// //     } catch (err) {
// //       console.error("Login error:", err);
// //       // Handle login error
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <>
// //       <Header
// //         classNameheader="login-header"
// //         classNamelogo="login-logo"
// //         classNamenav="login-nav"
// //         classNamesignin="login-signin"
// //       />
// //       <div className="auth">
// //         <div
// //           className={`auth-container ${
// //             isSignUp ? "sign-up-mode" : "sign-in-mode"
// //           }`}
// //         >
// //           <div className="auth-container">
// //             {!isSignUp && (
// //               <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
// //                 <h2>Log In</h2>
// //                 <div className="form-group">
// //                   <label htmlFor="email">Email:</label>
// //                   <input
// //                     name="email"
// //                     value={inputs.email}
// //                     onChange={handleChange}
// //                     type="email"
// //                     id="email"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="password">Password:</label>
// //                   <input
// //                     name="password"
// //                     onChange={handleChange}
// //                     type="password"
// //                     id="password"
// //                     required
// //                   />
// //                 </div>
// //                 <a href="/forgot-password" className="forgot-password">
// //                   Forgot Password?
// //                 </a>
// //                 <button type="submit" className="signin-btn">
// //                   Log In
// //                 </button>
// //               </form>
// //             )}
// //           </div>
// //           <div className="auth-container">
// //             {isSignUp && (
// //               <form onSubmit={handleSubmit} className="auth-form sign-up-form">
// //                 <h2>Sign Up</h2>
// //                 <div className="form-group">
// //                   <label htmlFor="username">Username:</label>
// //                   <input
// //                     name="username"
// //                     onChange={handleChange}
// //                     type="text"
// //                     id="username"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="email">Email:</label>
// //                   <input
// //                     name="email"
// //                     onChange={handleChange}
// //                     type="email"
// //                     id="email"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="password">Password:</label>
// //                   <input
// //                     name="password"
// //                     onChange={handleChange}
// //                     type="password"
// //                     id="password"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="securityQuestion">Security Question:</label>
// //                   <select
// //                     name="securityQuestion"
// //                     onChange={handleChange}
// //                     value={inputs.securityQuestion}
// //                     id="securityQuestion"
// //                     required
// //                   >
// //                     <option value="">Select a question</option>
// //                     <option value="What is your pet's name?">
// //                       What is your pet's name?
// //                     </option>
// //                     <option value="What is your mother's maiden name?">
// //                       What is your mother's maiden name?
// //                     </option>
// //                     <option value="What was the name of your first school?">
// //                       What was the name of your first school?
// //                     </option>
// //                     <option value="What is your favorite book?">
// //                       What is your favorite book?
// //                     </option>
// //                   </select>
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="securityAnswer">Security Answer:</label>
// //                   <input
// //                     name="securityAnswer"
// //                     onChange={handleChange}
// //                     type="text"
// //                     id="securityAnswer"
// //                     required
// //                   />
// //                 </div>
// //                 <button type="submit" className="signin-btn">
// //                   Sign Up
// //                 </button>
// //               </form>
// //             )}
// //           </div>
// //           <div className="overlay-container">
// //             <div className="overlay">
// //               <div className="overlay-panel overlay-left">
// //                 <h2>Hello there!</h2>
// //                 <p>Start your journey with us by creating an account.</p>
// //                 <button className="auth-btn" onClick={toggleForm}>
// //                   Sign Up
// //                 </button>
// //               </div>
// //               <div className="overlay-panel overlay-right">
// //                 <h2>Welcome Back!</h2>
// //                 <p>To stay connected, please log in to your account.</p>
// //                 <button className="auth-btn" onClick={toggleForm}>
// //                   Log In
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignInSignUp;
// //1
// // import React, { useState, useEffect } from "react";
// // import "./SignIn.css";
// // import { useDispatch } from "react-redux";
// // import { authActions } from "../../store";
// // import { useNavigate } from "react-router-dom";
// // import Header from "../Header/header";
// // import { sendAuthRequest } from "../api-helpers/helpers";

// // const SignInSignUp = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [isSignUp, setIsSignUp] = useState(false);

// //   const [inputs, setInputs] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     securityQuestion: "",
// //     securityAnswer: "",
// //   });

// //   useEffect(() => {
// //     setInputs({
// //       username: "",
// //       email: "",
// //       password: "",
// //       securityQuestion: "",
// //       securityAnswer: "",
// //     });
// //   }, [isSignUp]);

// //   const toggleForm = () => {
// //     setIsSignUp(!isSignUp);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const data = await sendAuthRequest(isSignUp, inputs); // Call the API helper function
// //       const { userId, isAdmin, role } = data || {}; // Ensure data is defined

// //       // Store userId and isAdmin status in localStorage if they exist
// //       if (userId) {
// //         localStorage.setItem("userId", userId);
// //       }
// //       if (isAdmin !== undefined) {
// //         localStorage.setItem("isAdmin", isAdmin.toString());
// //       }
// //       if (role) {
// //         localStorage.setItem("role", role);
// //       }

// //       // Dispatch login action with isAdmin payload if isAdmin is defined
// //       dispatch(authActions.login({ isAdmin }));

// //       navigate("/"); // Redirect to appropriate page
// //     } catch (err) {
// //       console.error("Authentication error:", err);
// //       // Handle authentication error
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <>
// //       <Header
// //         classNameheader="login-header"
// //         classNamelogo="login-logo"
// //         classNamenav="login-nav"
// //         classNamesignin="login-signin"
// //       />
// //       <div className="auth">
// //         <div
// //           className={`auth-container ${
// //             isSignUp ? "sign-up-mode" : "sign-in-mode"
// //           }`}
// //         >
// //           <div className="auth-container">
// //             {!isSignUp && (
// //               <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
// //                 <h2>Log In</h2>
// //                 <div className="form-group">
// //                   <label htmlFor="email">Email:</label>
// //                   <input
// //                     name="email"
// //                     value={inputs.email}
// //                     onChange={handleChange}
// //                     type="email"
// //                     id="email"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="password">Password:</label>
// //                   <input
// //                     name="password"
// //                     onChange={handleChange}
// //                     type="password"
// //                     id="password"
// //                     required
// //                   />
// //                 </div>
// //                 <a href="/forgot-password" className="forgot-password">
// //                   Forgot Password?
// //                 </a>
// //                 <button type="submit" className="signin-btn">
// //                   Log In
// //                 </button>
// //               </form>
// //             )}
// //           </div>
// //           <div className="auth-container">
// //             {isSignUp && (
// //               <form onSubmit={handleSubmit} className="auth-form sign-up-form">
// //                 <h2>Sign Up</h2>
// //                 <div className="form-group">
// //                   <label htmlFor="username">Username:</label>
// //                   <input
// //                     name="username"
// //                     onChange={handleChange}
// //                     type="text"
// //                     id="username"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="email">Email:</label>
// //                   <input
// //                     name="email"
// //                     onChange={handleChange}
// //                     type="email"
// //                     id="email"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="password">Password:</label>
// //                   <input
// //                     name="password"
// //                     onChange={handleChange}
// //                     type="password"
// //                     id="password"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="securityQuestion">Security Question:</label>
// //                   <select
// //                     name="securityQuestion"
// //                     onChange={handleChange}
// //                     value={inputs.securityQuestion}
// //                     id="securityQuestion"
// //                     required
// //                   >
// //                     <option value="">Select a question</option>
// //                     <option value="What is your pet's name?">
// //                       What is your pet's name?
// //                     </option>
// //                     <option value="What is your mother's maiden name?">
// //                       What is your mother's maiden name?
// //                     </option>
// //                     <option value="What was the name of your first school?">
// //                       What was the name of your first school?
// //                     </option>
// //                     <option value="What is your favorite book?">
// //                       What is your favorite book?
// //                     </option>
// //                   </select>
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="securityAnswer">Security Answer:</label>
// //                   <input
// //                     name="securityAnswer"
// //                     onChange={handleChange}
// //                     type="text"
// //                     id="securityAnswer"
// //                     required
// //                   />
// //                 </div>
// //                 <button type="submit" className="signin-btn">
// //                   Sign Up
// //                 </button>
// //               </form>
// //             )}
// //           </div>
// //           <div className="overlay-container">
// //             <div className="overlay">
// //               <div className="overlay-panel overlay-left">
// //                 <h2>Hello there!</h2>
// //                 <p>Start your journey with us by creating an account.</p>
// //                 <button className="auth-btn" onClick={toggleForm}>
// //                   Sign Up
// //                 </button>
// //               </div>
// //               <div className="overlay-panel overlay-right">
// //                 <h2>Welcome Back!</h2>
// //                 <p>To stay connected, please log in to your account.</p>
// //                 <button className="auth-btn" onClick={toggleForm}>
// //                   Log In
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignInSignUp;

// import React, { useState, useEffect } from "react";
// import "./SignIn.css";
// import { useDispatch } from "react-redux";
// import { authActions } from "../../store";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header";
// import { sendAuthRequest } from "../api-helpers/helpers";

// const SignInSignUp = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isSignUp, setIsSignUp] = useState(false);

//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//     securityQuestion: "",
//     securityAnswer: "",
//   });

//   useEffect(() => {
//     setInputs({
//       username: "",
//       email: "",
//       password: "",
//       securityQuestion: "",
//       securityAnswer: "",
//     });
//   }, [isSignUp]);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = await sendAuthRequest(isSignUp, inputs); // Call the API helper function

//       if (isSignUp) {
//         console.log("Sign-up successful:", data);
//         toggleForm(); // Switch to login mode after successful sign-up
//       } else {
//         const { userId, isAdmin, role } = data || {}; // Ensure data is defined

//         // Store userId and isAdmin status in localStorage if they exist
//         if (userId) {
//           localStorage.setItem("userId", userId);
//         }
//         if (isAdmin !== undefined) {
//           localStorage.setItem("isAdmin", isAdmin.toString());
//         }
//         if (role) {
//           localStorage.setItem("role", role);
//         }

//         // Dispatch login action with isAdmin payload if isAdmin is defined
//         dispatch(authActions.login({ isAdmin }));

//         navigate("/"); // Redirect to appropriate page
//       }
//     } catch (err) {
//       console.error("Authentication error:", err);
//       // Handle authentication error
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <Header
//         classNameheader="login-header"
//         classNamelogo="login-logo"
//         classNamenav="login-nav"
//         classNamesignin="login-signin"
//       />
//       <div className="auth">
//         <div
//           className={`auth-container ${
//             isSignUp ? "sign-up-mode" : "sign-in-mode"
//           }`}
//         >
//           <div className="auth-container">
//             {!isSignUp && (
//               <form className="auth-form sign-in-form" onSubmit={handleSubmit}>
//                 <h2>Log In</h2>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input
//                     name="email"
//                     value={inputs.email}
//                     onChange={handleChange}
//                     type="email"
//                     id="email"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                   <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     id="password"
//                     required
//                   />
//                 </div>
//                 <a href="/forgot-password" className="forgot-password">
//                   Forgot Password?
//                 </a>
//                 <button type="submit" className="signin-btn">
//                   Log In
//                 </button>
//               </form>
//             )}
//           </div>
//           <div className="auth-container">
//             {isSignUp && (
//               <form onSubmit={handleSubmit} className="auth-form sign-up-form">
//                 <h2>Sign Up</h2>
//                 <div className="form-group">
//                   <label htmlFor="username">Username:</label>
//                   <input
//                     name="username"
//                     onChange={handleChange}
//                     type="text"
//                     id="username"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     id="email"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                   <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     id="password"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="securityQuestion">Security Question:</label>
//                   <select
//                     name="securityQuestion"
//                     onChange={handleChange}
//                     value={inputs.securityQuestion}
//                     id="securityQuestion"
//                     required
//                   >
//                     <option value="">Select a question</option>
//                     <option value="What is your pet's name?">
//                       What is your pet's name?
//                     </option>
//                     <option value="What is your mother's maiden name?">
//                       What is your mother's maiden name?
//                     </option>
//                     <option value="What was the name of your first school?">
//                       What was the name of your first school?
//                     </option>
//                     <option value="What is your favorite book?">
//                       What is your favorite book?
//                     </option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="securityAnswer">Security Answer:</label>
//                   <input
//                     name="securityAnswer"
//                     onChange={handleChange}
//                     type="text"
//                     id="securityAnswer"
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="signin-btn">
//                   Sign Up
//                 </button>
//               </form>
//             )}
//           </div>
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="overlay-panel overlay-left">
//                 <h2>Hello there!</h2>
//                 <p>Start your journey with us by creating an account.</p>
//                 <button className="auth-btn" onClick={toggleForm}>
//                   Sign Up
//                 </button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h2>Welcome Back!</h2>
//                 <p>To stay connected, please log in to your account.</p>
//                 <button className="auth-btn" onClick={toggleForm}>
//                   Log In
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignInSignUp;

import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import { sendAuthRequest } from "../api-helpers/helpers";

const SignInSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    securityQuestion: "",
    securityAnswer: "",
  });

  useEffect(() => {
    setInputs({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      securityQuestion: "",
      securityAnswer: "",
    });
  }, [isSignUp]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await sendAuthRequest(isSignUp, inputs);

      if (isSignUp) {
        console.log("Sign-up successful:", data);
        toggleForm(); // Switch to login mode after successful sign-up
      } else {
        const { userId, isAdmin } = data || {};

        if (userId) {
          localStorage.setItem("userId", userId);
        }
        if (isAdmin !== undefined) {
          localStorage.setItem("isAdmin", isAdmin.toString());
        }

        dispatch(authActions.login({ isAdmin }));

        navigate("/"); // Redirect to appropriate page
      }
    } catch (err) {
      console.error("Authentication error:", err);
      // Handle authentication error
    }
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
            {!isSignUp && (
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
                    onChange={handleChange}
                    type="password"
                    id="password"
                    required
                  />
                </div>
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
                <button type="submit" className="signin-btn">
                  Log In
                </button>
              </form>
            )}
          </div>
          <div className="auth-container">
            {isSignUp && (
              <form onSubmit={handleSubmit} className="auth-form sign-up-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                  <div className="first-last">
                    <div>
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        name="firstName"
                        onChange={handleChange}
                        type="text"
                        id="firstName"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        name="lastName"
                        onChange={handleChange}
                        type="text"
                        id="lastName"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    name="username"
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
                    onChange={handleChange}
                    type="password"
                    id="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="securityQuestion">Security Question:</label>
                  <select
                    name="securityQuestion"
                    onChange={handleChange}
                    value={inputs.securityQuestion}
                    id="securityQuestion"
                    required
                  >
                    <option value="">Select a question</option>
                    <option value="What is your pet's name?">
                      What is your pet's name?
                    </option>
                    <option value="What is your mother's maiden name?">
                      What is your mother's maiden name?
                    </option>
                    <option value="What was the name of your first school?">
                      What was the name of your first school?
                    </option>
                    <option value="What is your favorite book?">
                      What is your favorite book?
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="securityAnswer">Security Answer:</label>
                  <input
                    name="securityAnswer"
                    onChange={handleChange}
                    type="text"
                    id="securityAnswer"
                    required
                  />
                </div>
                <button type="submit" className="signin-btn">
                  Sign Up
                </button>
              </form>
            )}
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
