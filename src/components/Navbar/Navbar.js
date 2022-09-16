import React, { useContext } from "react";
import "./Navbar.css";
import { GoHome } from "react-icons/go";
import { MdLogin, MdLogout, MdPostAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { AuthContext } from "../../config/authContext";

const Navbar = () => {
	const { isLogged, setIsLogged } = useContext(AuthContext);
	const navigate = useNavigate()
	const signOutFromApp = async () => {
		await signOut(auth);
		localStorage.setItem("isLogged", false);
		setIsLogged(false);
		navigate('/login')
	};
	return (
		<>
			<div className='navbar'>
				<div className='navbar__container'>
					<div className='nav__title__container'>
						<Link to='/' className='nav__title'>
							InstaBlog
						</Link>
					</div>
					<div className='nav__links'>
						<Link to='/' className='nav__link__container'>
							<span className='nav__link__icon'>
								<GoHome />
							</span>
							<span className='nav__link'>Home</span>
						</Link>
						{!isLogged && (
							<Link to='/login' className='nav__link__container'>
								<span className='nav__link__icon'>
									<MdLogin />
								</span>
								<span className='nav__link'>Login</span>
							</Link>
						)}
						{isLogged && (
							<>
								<Link to='/createPost' className='nav__link__container'>
									<span className='nav__link__icon'>
										<MdPostAdd />
									</span>
									<span className='nav__link'>Post</span>
								</Link>
								<div className='nav__link__container' onClick={signOutFromApp}>
									<span className='nav__link__icon'>
										<MdLogout />
									</span>
									<span className='nav__link'>Logout</span>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='mobile__navbar'>
				<div className='mobile__nav__links'>
					<Link to='/' className='mobile__nav__link__container'>
						<span className='mobile__nav__link__icon'>
							<GoHome />
						</span>
					</Link>
					{!isLogged && (
						<Link to='/login' className='mobile__nav__link__container'>
							<span className='mobile__nav__link__icon'>
								<MdLogin />
							</span>
						</Link>
					)}
					{isLogged && (
						<>
							<Link to='/createPost' className='mobile__nav__link__container'>
								<span className='mobile__nav__link__icon'>
									<MdPostAdd />
								</span>
							</Link>
							<div
								className='mobile__nav__link__container'
								onClick={signOutFromApp}>
								<span className='mobile__nav__link__icon'>
									<MdLogout />
								</span>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
