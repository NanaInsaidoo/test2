import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import MyNavBar from './MyNavBar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: "red",
        background: "",
        width:"20",
        height: "300px",
        // display:"flex"
    },
    paper2: {
        padding: theme.spacing(4),
        textAlign: 'right',
        color: "red",
        background: "",
        // width:"140",
        height: "300px",
        // display:"flex"
    },
    paper3: {
        padding: theme.spacing(4),
        textAlign: 'right',
        color: "red",
        background: "",
        // width:"140",
        height: "300px",
        // display:"flex"
    },
    main_container: {
        background: "green",

    },
    main_container2: {
        background: "red",
    }

}));


export default function MyGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Grid direction="row" container spacing={3} className={classes.main_container}>
               < Grid item xs={12}>
             <MyNavBar/>
                </Grid>

                <Grid item sm={12}>
                    <Paper  className={classes.paper}>xs</Paper>
                </Grid>

                <Grid item sm={4}>
                    <Paper className={classes.paper2}>xs</Paper>
                </Grid>

                <Grid item sm={8}>
                    <Paper className={classes.paper2}>xs</Paper>
                </Grid>


            </Grid>

                <Grid  
                    justify= "center" 
                    alignItems="flex-end" 
                    direction="row" 
                    container spacing={3} 
                    className={classes.main_container2}>

                <Grid item xs ={12} sm={11}>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>

                <Grid item xs ={12} sm={11}>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>

            </Grid>

        </div>
    );
}
