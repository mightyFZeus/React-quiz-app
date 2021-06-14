import React from 'react'
import useStyles from "./Styles"
import {Link} from 'react-router-dom'
import {Helmet } from 'react-helmet'
const Home =() =>{

  const classes = useStyles()
  return(
      <>
        
       <Helmet><title>Home - Quiz App</title></Helmet>
        <div className={classes.mainContainer}>
          <div className={classes.authContainer}>
            <h3
              className={classes.heading}
            >
             
              Quiz App
              </h3>
              <Link style={{color:'whitesmoke', textDecoration:'none'}} to='/instructions'>
               <button className={classes.play}>
              Play
              </button>
              </Link>
            <div >
            <Link style={{color:'whitesmoke', textDecoration:'none'}} to='/login'>
                <button className={classes.authLogin} >
                Login
                </button>
              </Link>
              <Link style={{color:'whitesmoke', textDecoration:'none'}} to='/signup'>
              <button className={classes.authLogin} style={{backgroundColor: "#000000",
              opacity:".7",}}>
             Sign up
                </button>
                </Link>
            </div>  
          </div>    
        </div>
       
      </>

  )
}

export default Home