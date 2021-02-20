import express from 'express'
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js'

const router = express.Router()

//GET route - all posts route
router.get('/', getPosts)
//POST route - create a post
router.post('/', createPost)
//GET route - single post, by id
router.get('/:id', getPost)
//PATCH route - used for updating existing documents (similar to UPDATE)
router.patch('/:id', updatePost)
//DELETE route - to delete single post
router.delete('/:id', deletePost)
//LIKE route - route for liking a post -- patch is updating the number of likes a post has
router.patch('/:id/likePost', likePost)


export default router