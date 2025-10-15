import { NavLink } from "react-router-dom"
import "../pages/login.css"
function Login(){
	return(
		<div>
			<h1>Login</h1>
			<div>
		<label htmlFor="userName">Username:</label>
		<input type="text"  id="userName"/>
		</div>
		<div>
		<label htmlFor="password">Password:</label>
		<input type="text"  id="password"  />
		</div>
		<div className="button-login">
			<NavLink to={""}>Login</NavLink>
		<NavLink to={"/"}>Home</NavLink>
		</div>
		
		</div>
	)
}
export default Login