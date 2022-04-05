import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sessions from "./components/authentication/registrations/signup";
import Registrations from "./components/authentication/sessions/signin";
import NavBar from "./components/Navigation/navbar";

const  App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        
            {/* <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} /> 
            <Route path="contact" element={<Contact />} />
            <Route path="properties" element={<Properties />} />
            <Route path="blog" element={<Blog />} />
            <Route path="decoration" element={<Decoration />} /> */}
            <Route path="signin" element={<Sessions />} />
            <Route path="signup" element={<Registrations />} />
        
      </Routes>
    </div>
  );
}

export default App;
