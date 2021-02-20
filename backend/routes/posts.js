import express from 'express'
import { getPosts, getPost } from '../controllers/posts.js'

const router = express.Router()

//GET route - all posts route
router.get('/', getPosts)
//POST route - create a post
router.post('/', createPost)
//GET route - single post, by id
router.get('/:id', getPost)
//PATCH used for updating existing documents (similar to UPDATE)
router.patch('/:id', updatePost)


export default router