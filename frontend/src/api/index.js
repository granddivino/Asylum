//Used to make API requests
import axios from 'axios'

const url = 'http://localhost:8000/posts'

//Axios call to URL
export const fetchPosts = () => axios.get(url);
//Create post
export const createPost = (newPost) => axios.post(url, newPost)
//Receiving id and updatedpost with function with instant return to the indicated url and id, and second parameter is sending over the updated post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
//Deletes post by id
export const deletePost = (id) => axios.delete(`${url}/${id}`)
