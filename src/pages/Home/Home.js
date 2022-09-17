import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Avatar from "../../assets/images/user.png";
import { FaTrashAlt } from "react-icons/fa";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import { AuthContext } from "../../config/authContext";

const Home = () => {
	const { isLogged } = useContext(AuthContext);
	const [postList, setPostList] = useState([]);
	const postsRef = collection(db, "posts");
	useEffect(() => {
		const getPosts = async () => {
			await getDocs(postsRef).then((res) => {
				setPostList(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			});
		};
		getPosts();
		// console.log(auth.currentUser.photoURL)
	});

	const deletePost = async (id) => {
		const docs = doc(db, "posts", id);
		await deleteDoc(docs);
	};

	return (
		<div className='main__content__container'>
			<div className='main__content'>
				<div className='home'>
					<div className='homeTitleContainer'>
						<h4 className='homeTitle'>Instablog</h4>
					</div>
					<div className='postCardContainer'>
						{/* Post Card */}
						{postList.length > 0 ? (
							postList.map((post, index) => {
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
														src={
															post.author.profile ? post.author.profile : Avatar
														}
														alt='Avatar'
														className='profileImage'
													/>
												</div>
												<div className='postAuthor'>@{username}</div>
												<div className='postAuthorFull'>{post.author.name}</div>
											</div>
											{isLogged && post.author.id === auth.currentUser.uid && (
												<div
													className='trashIcon'
													onClick={deletePost(post.author.id)}>
													<FaTrashAlt />
												</div>
											)}
										</div>
										<div className='postTitle'>{post.title}</div>
										<div className='post'>{post.post} </div>
									</div>
								);
							})
						) : (
							<div className='postCard'>
								<div className='topCardContainer'>
									<div className='authorContainer'>
										<div className='imageContainer'>
											<img
												src={Avatar}
												alt='Avatar'
												className='profileImage'
											/>
										</div>
										<div className='postAuthor'>@Username</div>
										<div className='postAuthorFull'>Author's Name</div>
									</div>
								</div>
								<div className='postTitle'>Post Title</div>
								<div className='post'>Post...</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
