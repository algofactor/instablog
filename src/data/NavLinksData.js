import { GoHome } from "react-icons/go";
import { MdLogin, MdPostAdd } from "react-icons/md";

export const NavLinksData = [
	{
		name: "Home",
		statusFor: "logged",
		icon: <GoHome />,
		linkPath: '/'
	},
	{
		name: "Login",
		statusFor: "loggedOut",
		icon: <MdLogin />,
		linkPath: '/login'
	},
	{
		name: "Post",
		statusFor: "loggedIn",
		icon: <MdPostAdd />,
		linkPath: '/createPost'
	},
];
