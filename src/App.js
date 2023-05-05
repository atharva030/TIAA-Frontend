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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        {/* <Route path="/hotels" element={<List/>}/> */}
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
      <MailList/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
