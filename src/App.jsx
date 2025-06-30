import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Tour from "./Tour.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Log from "./Log.jsx";
import OurCourses from "./OurCourses.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Log" element={<Log />} /> */}
        <Route path="/OurCourses" element={<OurCourses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;