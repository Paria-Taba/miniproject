import "../pages/register.css"
function Register(){
	return(
		<div className="register-container">
			<h1>Register yourself !</h1>
			<div>
				<label htmlFor="userName">Username:</label>
				<input type="text"  id="userName" />
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input type="text"  id="password" />
			</div>
			<button>Submit</button>
		</div>
	)
}
export default Register