import "./App.css"
import React from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
   <HashRouter>
	<Routes>
		<Route path="/" element={<Home></Home>}></Route>
		<Route path="/register" element={<Register></Register>}></Route>
	</Routes>
   </HashRouter>
  );
};

export default App;