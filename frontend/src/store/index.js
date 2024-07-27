import { createSlice, configureStore } from "@reduxjs/toolkit";

// Initial state with potential data from localStorage
const loadAuthState = () => {
  const userId = localStorage.getItem("userId");
  return { isloggedIn: !!userId };
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadAuthState(), // Load initial state from localStorage
  reducers: {
    login(state) {
      state.isloggedIn = true;
    },
    logout(state) {
      state.isloggedIn = false;
    },
  },
});

// Export actions for use in components
export const authActions = authSlice.actions;

// Configure store with authReducer
export const store = configureStore({
  reducer: authSlice.reducer,
});
