import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'
//Import everything from actions as api
import * as api from '../api/index.js'

//Action creators are functions that return actions as such, and action is an objection that has type and payload
//Since we're working with async data, and to fetch all the posts some time is gonna need to pass
//And for that we have to use redux thunk, thunk allows the use of an additional arrow function
export const getPosts = () => async (dispatch) => {
    try {
        //Getting the response from the API
        const { data } = await api.fetchPosts()
        //Payload is data where posts are stored
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
      }
}

//Action to create post
export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post)
  
      dispatch({ type: CREATE, payload: data })
    } catch (error) {
      console.log(error.message)
    }
}

//Action to update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    //Returning the updated post
    const { data } = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

//Action to like post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: LIKE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

//Action to delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}