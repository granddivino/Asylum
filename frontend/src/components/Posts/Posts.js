import React from 'react'
//Need to fetch data from global redux store, and that's what selector is for
import { useSelector } from 'react-redux'
import useStyles from './styles'


const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    return (
         <> 
         <h1>Posts</h1>
         <Post />
         </>
    )
}

export default Posts