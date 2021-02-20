//Used to make API requests
import axios from 'axios'

const url = 'http://localhost:8000/posts'

//Axios call to URL
export const fetchPosts = () => axios.get(url);