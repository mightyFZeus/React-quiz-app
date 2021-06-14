import React from "react";
import useStyles from './Styles'
const Instructions = () => {

  const classes = useStyles()
  return (
    <>
      <h2 className={classes.heading}>This is the instructions page</h2>
    </>
  );
};

export default Instructions;
