import React from 'react'
//For that cirle loader
import { Grid, CircularProgress } from '@material-ui/core'
//Need to fetch data from global redux store, and that's what selector is for
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    // If there is no posts.length then return this. This is what shows loader when posts haven't loaded on page yet
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={8}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                    {/* Props drilling: sending same prop over and over again to the most child component */}
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
                ))}
            </Grid>
            )
        )
}


export default Posts