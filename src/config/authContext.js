import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

export const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
	const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));
	const [user, setUser] = useState({});
	useEffect(() => {
		const checkStateChange = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			checkStateChange();
		};
	}, []);

	const authValues = {
		isLogged,
		setIsLogged,
		user,
		setUser,
	};
	return (
		<AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
	);
};

export default AuthContextWrapper;
