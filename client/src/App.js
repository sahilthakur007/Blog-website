import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Navbar from "./components/navbar";
import Signin from './components/Signin';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/signin" element={ <Signin/>} />
        <Route path="/signup" element={ <Signup/>} />
      </Routes>
   </>
  );
}

export default App;
