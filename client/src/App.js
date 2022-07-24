import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/navbar";
import Signin from './components/Signin';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Home/>} />
        <Route path="/signin" exact element={ <Signin/>} />
        <Route path="/signup" exact element={ <Signup/>} />
      </Routes>
   </>
  );
}

export default App;
