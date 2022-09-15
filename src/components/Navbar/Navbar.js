import React from "react";
import "./Navbar.css";
import { HiHome } from "react-icons/hi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import {MdPostAdd} from 'react-icons/md'
import { Link } from "react-router-dom";

const Navbar = () => {
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
								<HiHome />
							</span>
							<span className='nav__link'>Home</span>
						</Link>
						<Link to='/login' className='nav__link__container'>
							<span className='nav__link__icon'>
								<FiLogIn />
							</span>
							<span className='nav__link'>Login</span>
						</Link>
						<Link to='/createPost' className='nav__link__container'>
							<span className='nav__link__icon'>
								<MdPostAdd />
							</span>
							<span className='nav__link'>Post</span>
						</Link>
						<div className='nav__link__container'>
							<span className='nav__link__icon'>
								<FiLogOut />
							</span>
							<span className='nav__link'>Logout</span>
						</div>
					</div>
				</div>
			</div>
			<div className='mobile__navbar'>
				<div className='mobile__nav__links'>
					<Link to='/' className='mobile__nav__link__container'>
						<span className='mobile__nav__link__icon'>
							<HiHome />
						</span>
					</Link>
					<Link to='/login' className='mobile__nav__link__container'>
						<span className='mobile__nav__link__icon'>
							<FiLogIn />
						</span>
					</Link>
					<Link to='/createPost' className='mobile__nav__link__container'>
						<span className='mobile__nav__link__icon'>
							<MdPostAdd />
						</span>
					</Link>
					<div className='mobile__nav__link__container'>
						<span className='mobile__nav__link__icon'>
							<FiLogOut />
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
