import React from 'react'
import useStyles from "./Styles"
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import {Helmet } from 'react-helmet'
const Home =() =>{

  const classes = useStyles()
  return(
      <>
        
       <Helmet><title>Home - Quiz App</title></Helmet>
        <div className={classes.mainContainer}>
          <div className={classes.authContainer}>
            <Typography
              variant='h3'
              className={classes.heading}
            >
              Quiz App
              </Typography>
            <button className={classes.play}>
              <Link style={{color:'whitesmoke', textDecoration:'none'}} to='/instructions'>Play</Link>
              </button>
            <div >
              <button className={classes.authLogin} >
              <Link style={{color:'whitesmoke', textDecoration:'none'}} to='/login'>Login</Link>
              </button>
              <button className={classes.authLogin} style={{backgroundColor: "#000000",
    opacity:".7",}}>
              <Link style={{color:'whitesmoke', textDecoration:'none'}} to='/signup'>Sign up</Link>
                </button>
            </div>  
          </div>    
        </div>
       
      </>

  )
}

export default Home