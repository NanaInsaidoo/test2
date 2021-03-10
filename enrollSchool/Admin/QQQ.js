import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
     

    },
  },
  paper:{
    background:"BLUE" ,
    width:"800px",
    height:"50px"  
  }
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper  variant="outlined" />
      <Paper variant="outlined" square /> */}

        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >

        <Grid item lg={12} >
          <Paper className={classes.paper}> lg=12 sm=6</Paper>
        </Grid>

        <Grid item md={6} >
          <Paper className={classes.paper}> lg=12 sm=6</Paper>
        </Grid>

        <Grid item md={6} >
          <Paper className={classes.paper}> lg=12 sm=6</Paper>
        </Grid>

        <Grid item md ={6} >
          <Paper className={classes.paper}> lg=12 sm=6</Paper>
        </Grid>

        </Grid>
      
          


    </div>
  );
}