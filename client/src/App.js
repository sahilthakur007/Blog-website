import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
   </>
  );
}

export default App;
