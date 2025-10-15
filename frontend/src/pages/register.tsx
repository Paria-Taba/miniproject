import { NavLink } from "react-router-dom"
import "../pages/register.css"
import { useState } from "react"
function Register(){
	const[userName,setUserName]=useState("")
	const[password,setPassword]=useState("")
	const[data,setData]=useState([])
	interface User{
		_id:string
		userName:string,
		password:string
	}
	async function getData() {
		const response=await fetch("http://localhost:7000/register")
		const result=await response.json()
		setData(result)
		console.log(result)
	}
	async function submitHandler(){
		 if (!userName.trim() || !password.trim()) {
    alert("Please enter both username and password.");
    return;
  }

		const user:User={
			_id: "",
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
		getData()
		
	}
	
	async function  deleteHandler(id:string) {
		 try {
    const response = await fetch(`http://localhost:7000/register/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.error("Failed to delete user");
      return;
    }

    const result = await response.json();
    console.log("Deleted user:", result);

    getData()
    
    alert("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
  }
		
	}
	return(
		<div className="register-container">
				<NavLink to={"/"}>Home</NavLink>
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
	
		<button onClick={getHandler}>Get all users</button>
		{data.map((user: User, index) => (
			<div key={index}>
			<span>Username: {user.userName}</span> | <span>Password: {user.password}</span>
			<button onClick={() => deleteHandler(user._id)}>Delete</button>
			<button>Edit</button>
			</div>
			
		))}
		
		
		</div>
	)
}
export default Register