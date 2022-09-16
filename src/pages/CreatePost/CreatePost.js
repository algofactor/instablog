import React, { useContext, useEffect, useState } from "react";
import "./CreatePost.css";
import { AuthContext } from "../../config/authContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [post, setPost] = useState("");

	const { isLogged } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		!isLogged && navigate("/");
	});

	const postRef = collection(db, "posts");
	const submitPost = async () => {
		await addDoc(postRef, {
			title,
			post,
			author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
		});
		navigate('/')
	};

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
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>
							<div className='inputContainer'>
								<label htmlFor='post'>Post:</label>
								<textarea
									placeholder="E.g This is my first post. I'm so excited!! 😁"
									id='post'
									onChange={(e) => setPost(e.target.value)}></textarea>
							</div>
							<div className='cardButtonContainer'>
								<button className='cardButton' onClick={submitPost}>Submit Post</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
