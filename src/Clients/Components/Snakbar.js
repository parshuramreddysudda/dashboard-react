import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



const SnackBar=(props)=> {
  const classes = useStyles();


  return (
    <div className={classes.root}>

      <Snackbar open={props.show} autoHideDuration={6000} onClose={props.closeSnak}>
        <Alert onClose={props.closeSnak} severity={props.snakType}>
          {props.desc}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;