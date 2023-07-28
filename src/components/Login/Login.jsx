import React, { useState} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";
import { useEffect } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loader, setloader] = useState(false);
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
      setloader(true);
      try {
        const response = await axios.post(
          `https://tiaaserver-orjetgtc0-atharva030.vercel.app/api/auth/login`,
          {
            email: email,
            password: password,
          }
        );
        const json = response.data;
        console.log(json);
        if (json.success) {
          localStorage.setItem("token", json.authToken);
          localStorage.setItem("role", json.userRole);
          alert("You are successfully Logged in!");
          navigate("/home");
          setloader(false);
        } else {
          alert("Check Your Credentials!");
          setloader(false);
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Error occurred while logging in");
        setloader(false);
      }
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Redirect to home page if the token is present
      navigate("/home");
    }
  }, []);
  return (
    <div className="global-container">
      {loader ? (
        <Spinner />
      ) : (
        <div class="container" id="container">
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
              <div className="appHead">
                <h1>myRationApp</h1>
              </div>
              <h1>Sign in</h1>
              {/* <span>or use your account</span> */}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email && <h6 className="error">{errors.email}</h6>}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {errors.password && <h6 className="error">{errors.password}</h6>}
              <p>
                Dont have an Account? <a href="/register">Create New</a>
              </p>
              {/* <a href="#">Forgot your password?</a> */}
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
                <h1>Welcome Back!</h1>
                <p>
                  Introducing our Ration Distribution System! Manage your ration
                  supplies with ease using our inventory tracking feature. Say
                  goodbye to food waste and hello to hassle-free meal
                  management. Get started today!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
