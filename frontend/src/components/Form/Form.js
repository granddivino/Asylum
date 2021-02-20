import React from 'react'

//7. What's used to convert images! 
import FileBase from 'react-file-base64'
import useStyles from './styles'


const Form = () => {
    const classes = useStyles()

    const handleSubmit = async () => {

    }

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Currently Editing: "${post.title}"` : 'Create an Event/Announcement!'}</Typography>
          </form>
        </Paper> 
      )
}


export default Form