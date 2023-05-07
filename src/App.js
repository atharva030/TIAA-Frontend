import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Footer from "./components/footer/Footer";
import MailList from "./components/mailList/MailList";
import Login from "./components/Login/Login";
import './index.css'
import { useState } from "react";
import Register from "./components/Register/Register";
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate email and password
    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }
    setErrors(validationErrors);
    // submit form if no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted');
    }
  };
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<List/>}/>
    //     <Route path="/hotels/:id" element={<Hotel/>}/>
    //   </Routes>
    //   <MailList/>
    //   <Footer/>
    // </BrowserRouter>
    // <Login />
    <Register/> 


  );
}
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
export default App;
