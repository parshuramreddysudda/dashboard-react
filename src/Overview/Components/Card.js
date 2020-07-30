import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  }, 
  content: {
    flex: "1 0 auto",
    margin: "auto"
  },
  cover: {
    width: 180,
    height: 130,
    backgroundSize: "contain"
  },
}));
export default function CardComponent(props) {
  const classes = useStyles();
  const data=props.data

  return (
    <div>

      <Grid container spacing={3}>
        {
          data.map(app => (
            <Grid item xs={12} key={app.id}>
              <Card className={classes.card} >
                <CardMedia
                  className={classes.cover}
                  image={app.icon}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      {app.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Count is {app.count}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}
