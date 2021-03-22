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




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    maincontainer:{
        backgroundcolor:"red",
        width:"700px",

    },
    
    paper: {
        padding: theme.spacing(4),
        textAlign: '',
        color: "red",
        background: "",
        width:"80%",
        height: "300px",
        // display:"flex"
    },

}));


export default function AddManagerByAdmin() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();


    const handleDrawerClose = () => {
        setOpen(!open);
    };
    return (

        <div className={classes.root}>
            <AdminNavBar />

            <div onClick={handleDrawerClose}>
                <SummaryStatAdmin />
                <Box mt={10} fontWeight="Bold" Font size={"42"} textAlign="center">Add a Manager</Box>
                <Box mt={4}>

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        // alignItems="center"
                        className={classes.maincontainer}

                    >
                        <Grid item lg={12}>
                        <Paper className={classes.paper} >

                            <Grid item lg={8} md={6} sm={12} xm={12}
                            alignItems="center"
                            className={classes.grid}

                            >
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    // fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                
                            </Grid>
                        </Paper>
                        </Grid>

                    </Grid>

                </Box>
            </div>
        </div>



    );
}


