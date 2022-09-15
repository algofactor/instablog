import React from "react";
import "./Navbar.css";
import {HiHome} from 'react-icons/hi'
import {FiLogIn, FiLogOut} from 'react-icons/fi'
import {AiFillEdit} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className="nav__title__container">
                <a href='' className='nav__title'>
					InstaBlog
				</a>
                </div>
				<div className='nav__links'>
					<Link to='/' className="nav__link__container">
						<span className="nav__link__icon"><HiHome /></span>
						<span className="nav__link">Home</span>
					</Link>
					<Link to='/login' className="nav__link__container">
						<span className="nav__link__icon"><FiLogIn /></span>
						<span className="nav__link">Login</span>
					</Link>
					<Link to='/createPost' className="nav__link__container">
						<span className="nav__link__icon"><AiFillEdit /></span>
						<span className="nav__link">CreatePost</span>
					</Link>
					<div className="nav__link__container">
						<span className="nav__link__icon"><FiLogOut /></span>
						<span className="nav__link">Logout</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
