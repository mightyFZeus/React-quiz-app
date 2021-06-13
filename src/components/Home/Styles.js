import { makeStyles } from "@material-ui/core/styles";
import background from './background.jpg'

export default makeStyles((theme) => ({
  mainContainer:{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height:'100vh',
    weight: '100vw',
    display:'flex',
    justifyContent:"space-around"
  },

  play:{
    backgroundColor:'green',
    borderRadius:'30px',
    width:'20em',
    height:'2em',

  },

  authLogin:{
    width:'10em',
    height:'2em',
    backgroundColor:'red',
    borderRadius:'30px',
    marginRight:'1em'
  }
}));