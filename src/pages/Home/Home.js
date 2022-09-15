import React from "react";
import "./Home.css";
import Avatar from "../../assets/images/google-logo.png";

const Home = () => {
	return (
		<div className='main__content__container'>
			<div className='main__content'>
				<div className='home'>
					<div className='homeTitleContainer'>
						<h4 className='homeTitle'>Instablog</h4>
					</div>
					<div className='postCard'>
						<div className='authorContainer'>
							<div className='imageContainer'>
								<img src={Avatar} alt='Avatar' className='profileImage' />
							</div>
							<div className='postAuthor'>@Google</div>
						</div>
						<div className='post'>Yooo whats up peeps!</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
