// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { authActions } from "../store/authSlice";
// import { loginUser } from "../api-helpers/api-helpers"; // Import the API helper function

// const useLogin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const login = async (credentials) => {
//     try {
//       const data = await loginUser(credentials); // Call the API helper function
//       const { userId, isAdmin } = data;

//       // Store userId and isAdmin status in localStorage
//       localStorage.setItem("userId", userId);
//       localStorage.setItem("isAdmin", isAdmin.toString());

//       // Dispatch login action with isAdmin payload
//       dispatch(authActions.login({ isAdmin }));
//       navigate("/"); // Redirect to appropriate page
//     } catch (err) {
//       console.error("Login error:", err);
//       // Handle login error
//     }
//   };

//   return { login };
// };

// export default useLogin;
