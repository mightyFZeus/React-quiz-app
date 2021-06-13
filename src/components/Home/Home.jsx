import React from 'react'
import useStyles from "./Styles"
import { Typography } from '@material-ui/core';
const Home =() =>{

  const classes = useStyles()
  return(
      <>
        
       
        <div className={classes.mainContainer}>
          <div className={classes.authContainer}>
            <Typography
              variant='h3'
            >Quiz App</Typography>
            <button className={classes.play}>play</button>
            <div >
              <button className={classes.authLogin}>Login</button>
              <button className={classes.authLogin}>Sign up</button>
            </div>  
          </div>    
        </div>
       
      </>

  )
}

export default Home