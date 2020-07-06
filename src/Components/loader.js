import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    position: "absolute",
    left: "calc(50% - 20px)",
    top:"50%",
  },
}
));

export default function CircularIndeterminate() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
