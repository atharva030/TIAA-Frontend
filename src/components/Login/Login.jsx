import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate email and password
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 7) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(validationErrors);
    // submit form if no errors
    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch(
        `http://localhost:5001/api/auth/login`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }), // body data type must match "Content-Type" header
        }
      );
      const json = await response.json();
      console.log(json)
      if (json.success) {
        //save auth-token and redirect
        localStorage.setItem("token", json.authToken);
        localStorage.setItem("role", json.userRole);
        alert("You are successfully Logged in!");
        navigate("/home");
      } else {
        alert("Check Your Credentials!");
      }
    }
  };

  return (
    <div className="global-container">
      <div class="container" id="container">
        {/* <div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div> */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            {/* <span>or use your account</span> */}
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <p>
              Dont have an Account? <a href="/register">Create New</a>
            </p>
            <a href="#">Forgot your password?</a>
            <button type="submit" className="hover-btn">
              Login
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
