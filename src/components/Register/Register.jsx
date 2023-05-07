import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (event) => {
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
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(validationErrors);
    // submit form if no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted");
    }
  };

  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form onSubmit={handleSubmit} className="form-style">
          <h1>Register Now</h1>
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <select required>
            <option value="" disabled selected>
              Who are You?
            </option>
            <option value="ROLE_ORG">Organisation</option>
            <option value="ROLE_USER">Ration User</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
         <p>Already have an Account?<a href="#"> Sign In</a></p> 
          <button type="submit" className="hover-btn">Register</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please Register with your personal info
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
  );
};

export default Register;
