import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Divider, TextField, Typography } from '@material-ui/core';
import AdminNavBar from "./AdminNavBar"
import UserSettings from "./UserSettings"
import ListOfManager from "./ListOfManager"
import Box from '@material-ui/core/Box';
import SummaryStatAdmin from "./SummaryStatAdmin"
import { Form } from 'formik';
import { grey, deepPurple, red, green } from "@material-ui/core/colors";
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import check_circle from "./check_circle.png"
import AdminWelcome from './AdminWelcome';
import { useHistory } from 'react-router-dom';


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
        height: "auto",


    },
    label: {
        display: "block",
        padding:"23px"    },
        
    inputbox:{
        display: "block",
        width: "70%",
        height: "12px",
        padding:"15px",
        // line-height: "1.42857143",
        // color:" #555",
        // background-color: "#fff",
        // background-image:" none",
        // border: 1px solid "#ccc",
         borderRadius: "5px",
        border: `1px solid ${deepPurple[500]}`,
    },
    divider: {
        // Theme Color, or use css color in quote
        // background: "grey",
    },
    buttons:{
        margin: theme.spacing(2),
    }

}));


   
function AddSchoolSuccess(props) {
     const [open, setOpen] = React.useState(false);
    const classes = useStyles();
let history = useHistory();
const redirect = () => {
    history.push('/adminSchools')
  }

    return (
        <div>
           

           <Grid container className={classes.root} justify="center"
                    >

                        <Grid item sm={10} md={10} lg={6} className={classes.item0} >
                            <Grid 
                             container
                             direction="row"
                             justify="center"
                             alignItems="center"

                            >

                                <Paper className={classes.paper}>
                                    <Grid xs={12}>
                                        <Typography>School Account Created Successfully</Typography>
                                    </Grid>

                                    <Grid container spacing={3} align = "center">

                                        <Grid item xs={12} md={12}>
                                            <Divider mb={5} />
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                        <CheckCircleOutlineIcon style={{ color: green[500],height:"100px",width:"100px" }}/>
                                        {/* <img src={check_circle} alt="Logo" /> */}
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Typography color="green" variant="h5" gutterBottom>
                                                Acccont has been created successfully!
                                            </Typography>
                                        </Grid>
                                        


                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                               Login information sent to the email address of schools's representative.
                                               After successful login this person can now add more information to finish school set up.
                                            </Typography>
                                        </Grid>


                                        
                                   
                                    </Grid>

                                    <Box mt={6}>
                                        <Divider className={classes.divider} />
                                    </Box>
                                    
                                    
                                    <Grid   container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start">

                        {/* <Grid  className={classes.buttons}>
                            <Button size="large"    variant="outlined" color="primary"
                             onClick= {props.previous}
                            >Back   {props.value}</Button>
                        </Grid> */}

                        <Grid  className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="button"
                                    onClick= {redirect}
                                        >
                                            Finish
                                </Button>
                        </Grid>

                    </Grid> 
                    

                                </Paper>



                            </Grid>


                        </Grid>

                    </Grid>


        </div>
    )
}

export default AddSchoolSuccess
