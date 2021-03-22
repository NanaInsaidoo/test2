import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Typography } from '@material-ui/core';
import AdminNavBar from "./AdminNavBar"
import UserSettings from "./UserSettings"
import ListOfManager from "./ListOfManager"
import Box from '@material-ui/core/Box';
import SummaryStatAdmin from "./SummaryStatAdmin"
import { Form } from 'formik';
import { grey, deepPurple } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        // background: "purple",


    },
    maincontainer: {
    },

    item0: {

        background: "black",

        height: "300px",
        align: "center"

    },
    item1: {

        background: "green",

        height: "300px",
        align: "center"

    },
    item2: {

        background: "red",

        height: "300px",

    },
    item3: {

        background: "blue",

        height: "300px",

    },

    paper: {
        padding: theme.spacing(4),
        textAlign: 'left',
        background: "",
        width: "100%",
        height: "300px",


    },
    label: {
        display: "block",
        padding:"23px"    },
    inputbox:{
        display: "block",
        width: "70%",
        height: "12px",
        padding:"10px",
        // line-height: "1.42857143",
        // color:" #555",
        // background-color: "#fff",
        // background-image:" none",
        // border: 1px solid "#ccc",
        // border-radius: "4px",
        border: `1px solid ${deepPurple[500]}`,
    }

}));


function Test2() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root} justify="center"
            >

                <Grid item xs={6} className={classes.item0} >
                    <Grid container
                    >



                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item sm={6} >
                                    <label >
                                        <Box mb={1} mt={3}> First Name:</Box>
                    <input type="text" className={classes.inputbox} />
                                    </label>
                                </Grid>
                                <Grid item sm={6}>
                                <label >
                                        <Box mb={1} mt={3}> Last  Name:</Box>
                    <input type="text" className={classes.inputbox} />
                                    </label>
                                </Grid>

                                
                                <Grid item sm={6}>
                                <label >
                                        <Box mb={1} mt={3}> Middle  Name:</Box>
                    <input type="text" className={classes.inputbox} />
                                    </label>
                                </Grid>
                                <Grid item sm={6}>
                                <label >
                                        <Box mb={1} mt={3}> Date of Birth:</Box>
                    <input type="text" className={classes.inputbox} />
                                    </label>
                                </Grid>

                            </Grid>

                        </Paper>



                    </Grid>


                </Grid>

            </Grid>
        </div>
    )
}

export default Test2
