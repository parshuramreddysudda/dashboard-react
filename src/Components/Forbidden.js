import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  image: {
    height: "auto",
    width: "auto",

  },
  paper: {
    padding: 80,
    textAlign: 'center',
    height: "50px",
    lineHeight: "200px",
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: "400px",
    lineHeight: "200px",
    color: theme.palette.text.secondary,
  },
  center: {
    display: "inline",
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.center} spacing={3}>
        <Grid item md={12} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Your current role doesn't have enough permission to view this page. <br/>Please return with other Role :P
      </Typography>
          </Paper>
          <Paper className={classes.paper2}>

            <img className={classes.image} src="https://cdn3.wpbeginner.com/wp-content/uploads/2016/03/403forbiddenerror.jpg" alt="VIDYA VOX" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
