import React from "react";
import useStyles from './Styles'
import {Link} from 'react-router-dom'
const Instructions = () => {

  const classes = useStyles()
  return (
    <>
      <h2 className={classes.heading}>This is the instructions page</h2>
      <Link to='/quiz'>lest do this</Link>
    </>
  );
};

export default Instructions;
