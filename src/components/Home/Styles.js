import { makeStyles } from "@material-ui/core/";
import background from "./background.jpg";

export default makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
    weight: "100vw",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },

  heading: {
    textAlign: "center",
    fontWeight:'400',
    fontSize: "80px",
    marginBottom: ".6em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },

  play: {
    backgroundColor: "#000000",
    opacity:".7",
    borderRadius: "30px",
    width: "20em",
    height: "2em",
    fontSize: "2em",
    color: "white",
    marginBottom: "1em",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "6em",
      height: "1.5em",
      marginLeft: "6em",
      fontSize: "1.1em"
    }
  },

  authLogin: {
    width: "10em",
    height: "2em",
    backgroundColor: "#000000",
    opacity:".7",
    borderRadius: "30px",
    marginRight: "1em",
    fontSize: "2em",
    color: "white",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "6em",
      height: "1.5em",
      marginLeft: "2em",
      marginBottom: ".6em",
      fontSize: "1.1em"
    }
  }
}));
