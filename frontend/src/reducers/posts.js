import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

//In reducers, the state always has to be equal to something
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_ALL:
          return action.payload
        case CREATE:
          return posts
        default:
          return posts
    }
}