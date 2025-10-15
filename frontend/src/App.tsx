import "./App.css"
import React from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginProfile from "../src/pages/loginProfile";


const App: React.FC = () => {
  return (
   <HashRouter>
	<Routes>
		<Route path="/" element={<Home></Home>}></Route>
		<Route path="/register" element={<Register></Register>}></Route>
			<Route path="/login" element={<Login></Login>}></Route>
			<Route path="/login/profile"  element={<LoginProfile></LoginProfile>}></Route>
	</Routes>
   </HashRouter>
  );
};

export default App;