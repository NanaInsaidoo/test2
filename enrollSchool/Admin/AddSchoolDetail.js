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
import { grey, deepPurple, red } from "@material-ui/core/colors";
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import FormikControl from '../FormikControl';
import MyFieldArray from './MyFieldArray';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        // background: "purple",

    },


    item0: {

        background: "black",

        // height: "300px",
        align: "center"

    },
    item1: {

        background: "green",

        align: "center"

    },
    item2: {



    },
    item3: {

    },

    paper: {
        padding: theme.spacing(4),
        textAlign: 'left',
        background: "",
        width: "100%",



    },
    label: {
        display: "block",
        padding: "23px"
    },

    inputbox: {
        display: "block",
        width: "70%",
        height: "12px",
        padding: "15px",
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
    buttons: {
        margin: theme.spacing(2),
    }
    ,
    ppp: {

    }

}));


function AddSchoolDetail(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();


    const handleDrawerClose = () => {
        setOpen(!open);
    };
    return (




        <div className={classes.ppp} >
            {/* <AdminNavBar /> */}

            <div onClick={handleDrawerClose}>
                {/* <SummaryStatAdmin /> */}



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
                                        <Typography>Basic Information</Typography>
                                    </Grid>

                                    <Grid container spacing={3}>

                                        <Grid item xs={12} md={12}>
                                            <Divider mb={5} className={classes.divider} />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <FormikControl control="input" name="nameOfSchool " label="Name of School :" id="nameOfSchool" />
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormikControl control="input" name="schoolRegistrationID" label="School Registration ID " id="schoolRegistrationID" />
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormikControl control="input" name="businessRegistrationID" label="Business Registration ID " id="businessRegistrationID" />
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormikControl control="input" name="primaryPhoneNumber" label="Primary Phone Number" id="primaryPhoneNumber" />
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormikControl control="input" name="secondaryPhoneNumber" label="Secondary Phone Number" id="secondaryPhoneNumber" />
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormikControl control="input" name="schoolEmail" label="School email" id="schoolEmail" />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormikControl control="input" name="webSite" label="WebSite URL" id="webSite" />
                                        </Grid>

                                   
                                    </Grid>

                                    <Box mt={6}>
                                        <Divider className={classes.divider} />
                                    </Box>
                                    
                                    
                                    <Grid   container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start">

                        <Grid  className={classes.buttons}>
                            <Button size="large"    variant="outlined" color="primary"
                             onClick= {props.previous}
                            >Back   {props.value}</Button>
                        </Grid>

                        <Grid  className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="button"
                                    onClick= {props.next}
                                        >
                                            NEXT
                                </Button>
                        </Grid>

                    </Grid> 
                    

                                </Paper>



                            </Grid>


                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>



    );



}

export default AddSchoolDetail
