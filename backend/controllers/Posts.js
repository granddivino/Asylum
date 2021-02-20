import express from 'express'
import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

const router = express.Router()


//TRY and CATCH: Try- Happens if successful Catch- Happens if error happens

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

export const createPost = (req, res) => {
    const post = req.body
    const newPostMessage = new PostMessage

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage )
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    //Extract id from req.params -- start with {id: _id} req.params
    const { id: _id } = req.params
    const { title, message, creator, selectedFile, tags } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id }
    
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true })


    res.json(updatedPost)
}


export default router