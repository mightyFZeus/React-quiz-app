import { makeStyles } from "@material-ui/core/";


export default makeStyles((theme) => ({
questions:{
  backgroundColor:'#f8f8f8',
  borderLeft:'5px solid blue',
  width:'80%',
  margin: '3rem auto 0 auto',
  padding:'1.5rem 2rem',
   [theme.breakpoints.down("sm")]: {
      width: "70%"
    }
},


lifeline:{
  display:'flex',
  justifyContent:'space-between'
},
heading:{
  fontSize:'1.2rem',
  marginBottom:'3rem',
  lineHeight:'1.5',
  textAlign:'center'
},
optionsContainer:{
  display:'inline-block',
  width:'50%',
   [theme.breakpoints.down("sm")]: {
      width: "50%"
    }
},
option:{
  backgroundColor:'blue',
  borderRadius:'30px', 
  color:'white',
  cursor:'pointer',
  margin:'2rem auto',
  padding:'1rem',
  transition:'0.3s linear all',
  textAlign:'center',
  width:'90%',
  "&:hover": {
      backgroundColor: "#030647",
    },
     [theme.breakpoints.down("sm")]: {
      width: "70%"
    }
}, 

buttonContainer:{
  display:'flex',
  justifyContent:'flex-start',
  margin:'0 auto 1.5rem auto',
  padding:'2rem',
  width:'80%',
  [theme.breakpoints.down("sm")]: {
      width: "60%"
    }
},
button:{
  border:'none',
  color:'#f8f8f8',
  cursor:'pointer',
  marginRight:'2rem',
  padding:'0.5rem 1.5rem',
  [theme.breakpoints.down("sm")]: {
      marginRight: "0.5rem",
      padding:'0.5rem 1rem',
    }
},
hints:{
  color: 'green',
  cursor:'pointer',
  "&:hover": {
    color: "#d3d61e",
  },

}




}));
