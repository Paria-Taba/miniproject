import "../pages/register.css"
import { useState } from "react"
function Register(){
	const[userName,setUserName]=useState("")
	const[password,setPassword]=useState("")
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
		</div>
	)
}
export default Register