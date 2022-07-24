import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Navbar from "./components/navbar";
import Signin from './components/Signin';
import Signup from './components/Signup';
import SingleBlog from './components/singleBlog';
import CreateBlog from './components/createBlog';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/singleblog/:id" element={<SingleBlog/>} />
        <Route path="/createBlog" element={<CreateBlog/>} />
      </Routes>
    </>
  );
}

export default App;
