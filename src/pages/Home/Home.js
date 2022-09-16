import React, { useEffect, useState } from "react";
import "./Home.css";
import Avatar from "../../assets/images/google-logo.png";
import { FaTrashAlt } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const Home = () => {
	const [postList, setPostList] = useState([]);
	const postsRef = collection(db, "posts");
	useEffect(() => {
		const getPosts = async () => {
			await getDocs(postsRef).then((res) => {
				setPostList(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			});
		};
		getPosts();
	});

	return (
		<div className='main__content__container'>
			<div className='main__content'>
				<div className='home'>
					<div className='homeTitleContainer'>
						<h4 className='homeTitle'>Instablog</h4>
					</div>
					<div className='postCardContainer'>
						{/* Post Card */}
						{postList.map((post, index) => {
							let username =
								post.author.name.split(" ")[0][0] +
								"" +
								post.author.name.split(" ")[1][0];
							return (
								<div className='postCard' key={index}>
									<div className='topCardContainer'>
										<div className='authorContainer'>
											<div className='imageContainer'>
												<img
													src={Avatar}
													alt='Avatar'
													className='profileImage'
												/>
											</div>
											<div className='postAuthor'>@{username}</div>
											<div className='postAuthorFull'>{post.author.name}</div>
										</div>
										<div className='trashIcon'>
											<FaTrashAlt />
										</div>
									</div>
									<div className='postTitle'>{post.title}</div>
									<div className='post'>{post.post} </div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
