import "./App.css";
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/Dashboard'
import { Routes,Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn ] = useState(false);
  return <div
  className="w-screen h-screen bg-richblack-900 flex flex-col overflow-hidden">
     <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/dashboard" element={ isLoggedIn? (<DashBoard/>): (<Login/> )} />
        
    </Routes>
     </div>;
}

export default App;
