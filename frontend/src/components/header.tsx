import { NavLink } from "react-router-dom"
import "../components/header.css"
function Header(){
	return(
		<div className="header-container">
			<NavLink to={"/register"}>Register</NavLink>
			<NavLink to={""}>Login</NavLink>
		</div>
	)
}
export default Header