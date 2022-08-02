import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Signin from './components/Signin';
import Signup from './components/Signup';
import SingleBlog from './components/singleBlog';
import CreateBlog from './components/createBlog';
import MyBlog from "./components/myblog"
import Nav from './components/Nav';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/createBlog/:id" element={<CreateBlog />} />
        <Route path="/myblog" element={<MyBlog />} />
      </Routes>
    </>
  );
}

export default App;
