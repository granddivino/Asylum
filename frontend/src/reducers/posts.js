import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

//In reducers, the state always has to be equal to something
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_ALL:
          return action.payload
        case CREATE:
          return [...posts, action.payload]
        case UPDATE:
          //Mapping over post arrays, changing something in there and returning changed array
          return posts.map((post) => (post._id === action.payload._id ? action.payload : post));  
        default:
          return posts
    }
}