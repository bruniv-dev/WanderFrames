import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  sendResetPasswordRequest,
  verifySecurityAnswer,
  resetPassword,
} from "../api-helpers/helpers";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const navigate = useNavigate();

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error message
    try {
      const response = await sendResetPasswordRequest(email);
      if (response.error) {
        // Check if the response has an error indicating the user does not exist
        setErrorMessage(
          "User does not exist. Please check the email address and try again."
        );
        setIsLoading(false);
        return;
      }
      setSecurityQuestion(response.securityQuestion);
      setResetToken(response.resetToken); // Store token in local storage
      localStorage.setItem("resetToken", response.resetToken); // Store token in local storage
      setIsLoading(false);
    } catch (err) {
      console.error("Error requesting password reset:", err);
      setErrorMessage("User Does Not Exist. please sign up");
      setIsLoading(false);
    }
  };

  const handleVerifyAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await verifySecurityAnswer(email, securityAnswer);
      if (response.isCorrect) {
        setIsVerified(true);
      } else {
        alert("Incorrect security answer. Please try again.");
      }
    } catch (err) {
      console.error("Error verifying security answer:", err);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("resetToken"); // Get token from local storage
      await resetPassword(storedToken, newPassword);
      alert("Password reset successful. Please log in with your new password.");
      navigate("/loginSignup"); // Redirect to sign-in page
    } catch (err) {
      console.error("Error resetting password:", err);
    }
  };

  return (
    <div>
      {errorMessage && <div className="error-popup">{errorMessage}</div>}{" "}
      {/* Error message display */}
      {!securityQuestion ? (
        <form onSubmit={handleRequestReset}>
          <h2>Forgot Password</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      ) : !isVerified ? (
        <form onSubmit={handleVerifyAnswer}>
          <h2>Security Question</h2>
          <p>{securityQuestion}</p>
          <div>
            <label htmlFor="securityAnswer">Answer:</label>
            <input
              type="text"
              id="securityAnswer"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verify Answer</button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <h2>Reset Password</h2>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
