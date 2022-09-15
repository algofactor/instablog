import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
	return (
		<div className='main__content__container'>
			<div className='main__content'>
				<div className='createPost'>
					<div className='createPostCard'>
						<div className='cardTitle'>
							<h2>Instablog</h2>
							<h4>Add your post.</h4>
						</div>
						<div className='cardContent'>
							<div className='inputContainer'>
								<label htmlFor='title'>Title:</label>
								<input
									type='text'
									id='title'
									placeholder=' E.g. My first post (Optional)'
								/>
							</div>
							<div className='inputContainer'>
								<label htmlFor='post'>Post:</label>
								<textarea
									placeholder="E.g This is my first post. I'm so excited!! 😁"
									id='post'></textarea>
							</div>
							<div className='cardButtonContainer'>
								<button className='cardButton'>Submit Post</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
