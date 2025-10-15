import { Navigate, NavLink } from "react-router-dom"
import "../pages/login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
	const[userName,setUserName]=useState("")
	const[password,setPassword]=useState("")
		const navigate = useNavigate(); 
		interface User{
		
		userName:string,
		password:string
	}
	async function loginHandler(){
	
		 if (!userName.trim() || !password.trim()) {
    alert("Please enter both username and password.");
    return;
  }

		const user:User={
			userName,
			password
		}
		const response=await fetch("http://localhost:7000/login",{
			method:"POST",
			headers:{"content-type":"application/json"},
			body:JSON.stringify(user)
			
		})
	if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Wrong username or password!");
        return;
      }
	
		const result=await response.json()
		alert(`welcome ${userName}`)
		navigate("/login/profile")
		
	}
	return(
		<div>
			<h1>Login</h1>
			<div>
		<label htmlFor="userName">Username:</label>
		<input type="text"  id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="password">Password:</label>
		<input type="text"  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
		</div>
		<div className="button-login">
			<button onClick={loginHandler}>Login</button>
		<NavLink to={"/"}>Home</NavLink>
		</div>
		
		</div>
	)
}
export default Login