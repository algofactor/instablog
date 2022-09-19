import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";

function App() {
	return (
		<Router basename="/">
			<div className='navbar__page'>
				<Navbar />
			</div>
			<div className="pages__container">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/createPost' element={<CreatePost />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
