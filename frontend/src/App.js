import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
//Dispatch for use in redux to dispatch an action
import { useDispatch } from 'react-redux'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'


const App = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">My App Name</Typography>
      <img className={classes.image} src ={Flag} alt="Flag" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}


export default App;
