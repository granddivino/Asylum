import express from 'express'
import { getPosts } from '../controllers/posts.js'

const router = express.Router()


//GET route - all posts route
router.get('/', getPosts)
//POST route - create a post
router.post('/', createPost);


export default router