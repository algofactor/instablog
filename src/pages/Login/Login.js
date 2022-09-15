import React from "react";
import "./Login.css";
import GoogleLogo from "../../assets/images/google-logo.png";

const Login = () => {
	return (
		<div className='main__content__container'>
			<div className='main__content'>
				<div className='login'>
					<div className='login__card'>
						<h2>Instablog</h2>
						<h4>Join the community now.</h4>
						<button className='google__card'>
							<span className='google__icon'>
								<img src={GoogleLogo} alt='Google Logo' />
							</span>
							<span>Sign In with Google</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
