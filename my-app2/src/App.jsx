// import Test from "./components/Test";
// import Test1 from "./components/Test1";
// import Table from "./components/Table";
// import Img from "./components/image";
// import Test2 from "./components/Test2";
// import Test3 from "./components/Test3";
// import LoginPage from "./components/LoginPage";
// import LoginPage1 from "./components/Loginpage1";
// import Activity3 from "./Activity3";

import Home from "./components/home";
import About from "./components/about";
import Loginr from "./components/loginr";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <ul>
      <li id="logo">
        <img
          src="https://pvppcoe.ac.in/wp-content/uploads/2022/12/College-Logo-1-1-2048x294.png"
          alt=""
        />
      </li>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Loginr">Login</Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div>
      {/* <Test></Test>
      <Test1 /> */}
      {/* <Table></Table>
      <Img /> */}
      {/* <Test2 empName="Bhoomi" empAddress="Ambernath" />
      <Test2 stdId="1001" /> */}
      {/* <Test3 /> */}
      {/* <LoginPage />
      <LoginPage1 />
      <Activity3 /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Loginr" element={<Loginr />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
