import { NavLink } from "react-router-dom"
import "../pages/register.css"
import { useState } from "react"
function Register(){
	const[userName,setUserName]=useState("")
	const[password,setPassword]=useState("")
	const[data,setData]=useState([])
	interface User{
		userName:string,
		password:string
	}
	async function submitHandler(){
		const user:User={
			userName,
			password
		}
		const response=await fetch("http://localhost:7000/register",{
			method:"POST",
			headers:{"content-type":"application/json"},
			body:JSON.stringify(user)
			
		})
		if(!response.ok){
			console.log("can not post user in database")
			return
		}
		const result=await response.json()
		alert("User registered successfully")
		setPassword("")
		setUserName("")
		
	}
	async function getHandler(){
		const response=await fetch("http://localhost:7000/register")
		const result=await response.json()
		setData(result)
		console.log(result)
		
	}
	return(
		<div className="register-container">
		<h1>Register yourself !</h1>
		<div>
		<label htmlFor="userName">Username:</label>
		<input type="text"  id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="password">Password:</label>
		<input type="text"  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
		</div>
		<button onClick={submitHandler}>Submit</button>
		<NavLink to={"/"}>Home</NavLink>
		<button onClick={getHandler}>Get all users</button>
		{data.map((user: User, index) => (
			<div key={index}>
			<span>Username: {user.userName}</span> | <span>Password: {user.password}</span>
			<button>Delete</button>
			<button>Edit</button>
			</div>
			
		))}
		
		
		</div>
	)
}
export default Register