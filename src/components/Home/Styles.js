import { makeStyles } from "@material-ui/core/styles";
import background from './background.jpg'

export default makeStyles((theme) => ({
  mainContainer:{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height:'100vh',
    weight: '100vw',
    padding:'0',
    margin: '0'


  }
}));