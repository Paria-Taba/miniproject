import { NavLink } from "react-router-dom"
import "../pages/Home.css"
import Header from "../components/header"
function Home(){
	return(
		<div className="home-container">
			<Header></Header>
			<h1>Welcome to Movie Site</h1>
			<NavLink to={"/register"}>Register Now !</NavLink>
		</div>
	)
}
export default Home