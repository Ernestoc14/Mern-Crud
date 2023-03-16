import Post from "../models/Post.js"

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
}

export const createPost = async (req, res) => {
    const {title, description} = req.body
    const newPost = new Post({title, description})
    
    return res.json(newPost)
}

export const updatePost = (req, res) => res.send('updating a post')

export const deletePost = (req, res) => res.send('deleting a post')

export const getPost = (req, res) => res.send('getting a post')