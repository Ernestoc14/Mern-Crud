import { useState, useContext, createContext, useEffect } from 'react'
import { getPostsRequests, createPostRequests, deletePostRequests, getPostRequests, updatePostRequests } from '../api/posts'

const postContext = createContext()

export const usePosts = () => {
    const context = useContext(postContext)
	return context
}

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([])

	const getPosts = async () => {
		const res = await getPostsRequests()
		setPosts(res.data)
	}

	const createPost = async (post) => {
		try {
			const res = await createPostRequests(post)
			console.log(res)
			setPosts([...posts, res.data])
		} catch (error) {
			console.log(error)
		}
	}

	const deletePost = async (id) => {
		const res = await deletePostRequests(id)
		if(res.status === 204){
			setPosts(posts.filter(post => post._id !== id))
		}
	}

	const getPost = async(id) => {
		const res = await getPostRequests(id)
		return res.data
	}

	const updatePost = async(id, post) => {
		const res = await updatePostRequests(id, post)
		setPosts(posts.map(post => post._id === id ? res.data : post))
	}

	useEffect(() => {
		getPosts()
	}, [])

	return (
		<postContext.Provider
			value={{
				posts,
				getPosts,
				createPost,
				deletePost,
				getPost,
				updatePost
			}}
		>
			{children}
		</postContext.Provider>
	)
}
