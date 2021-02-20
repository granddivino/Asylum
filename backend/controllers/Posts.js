import express from 'express'
import PostMessage from '../models/postMessage.js';

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

export default router