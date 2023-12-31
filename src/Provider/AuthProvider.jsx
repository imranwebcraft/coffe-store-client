import PropTypes from "prop-types";
import { createContext, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [user, setUser] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(true);

	// Create new user

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const authInfo = {
		user,
		loading,
		createUser,
		signInUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
