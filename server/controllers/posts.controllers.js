import Post from "../models/Post.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    try {
        const {title, description} = req.body
        if(req.files.image){
            
        }
        const newPost = new Post({title, description})

        await newPost.save()
        return res.json(newPost)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id , req.body, {new: true})
        return res.send(updatePost)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deletePost = async (req, res) => {
    try {
        const postRemoved = await Post.findOneAndDelete(req.params.id)
        if(!postRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getPost = async (req, res) => {
    try {
        const postFound = await Post.findById(req.params.id)
        if(!postFound) return res.sendStatus(404)
        return res.json(postFound)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}