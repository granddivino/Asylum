import express from 'express'
import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

const router = express.Router()


//TRY and CATCH: Try- Happens if successful Catch- Happens if error happens

//Controller for getPosts
export const getPosts = async (req, res) => {
    try {
        //Finding something inside of a model takes time so await needs to be added here and async in getPosts function
        const postMessages = await PostMessage.find()
                //console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
} 

//Controller for createPost
export const createPost = (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save()
        res.status(201).json(newPostMessage )
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

//Controller for updatePost
export const updatePost = async (req, res) => {
    //Extract id from req.params -- start with {id: _id} req.params
    const { id: _id } = req.params
    const { title, message, creator, selectedFile, tags } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id }
    
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true })

    res.json(updatedPost)
}

//Controller for deletePost
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router