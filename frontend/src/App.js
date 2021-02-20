import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'


const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}>
      <Typography className={classes.heading}>My App Name</Typography>
      <img src ={Flag} alt="Flag" height="60"/>
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
