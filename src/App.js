import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from "./pages/list/List";
import Footer from "./components/footer/Footer";
import Login from "./components/Login/Login";
import './index.css'
import Register from "./components/Register/Register";
import Slots from "./pages/Slots/Slots";

function App() {


  return (
  
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />
        {/* Register page */}
        <Route path="/register" element={<Register />} />
        {/* Other pages */}
        <Route path="/home" element={<List />} />
        {/* <Route path="/hotels/:id" element={<Hotel />} /> */}
        <Route path="/slots" element={<Slots />} />
        {/* <Route path="/history" element={<History />} /> */}
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
//     {/* <BrowserRouter>
//     <Routes>
// <Route path="/" element={<List />} />
// <Route path="/slots" element={<Slots />} />
// </Routes>
// </BrowserRouter> */}
  );
}

export default App;
