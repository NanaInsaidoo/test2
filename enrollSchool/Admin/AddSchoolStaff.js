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


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        // background: "purple",


    },
    maincontainer: {
    },

    item0: {

       

        height: "auto",
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
        width: "80%",
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


export default function AddSchoolStaff(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();


    const handleDrawerClose = () => {
        setOpen(!open);
    };
    return (

        <div>
        <Grid container className={classes.root} justify="center"
        >

            <Grid item sm={10} md ={10} lg={6} className={classes.item0} >
                <Grid container
                >

                    <Paper className={classes.paper}>
                    <Grid xs={12}>

                        {/* this user can add other staffs later . this user will receive email to finish filling this form  then add other staff*/}

              <Typography>Add school Admimistator</Typography> 
               </Grid>
                    <Box mt={0}>
                            <Divider className={classes.divider} />
                        </Box>
                        <Grid container>
                          
                            <Grid item xs={12} md={6}>
                              <FormikControl control="input" name="firstName" label=" First Name " id="firstName" />
                             </Grid>

                             <Grid item xs={12} md={6}>
                               <FormikControl control="input" name="lastName" label="Last Name " id="lastName" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <FormikControl control="input" name="middleName" label="Middle Name " id="middleName" />
                             </Grid>

                             <Grid item xs={12} md={6}>
                               <FormikControl control="date" name="dateOfBirth" label="Date Of Birth" id="dateOfBirth" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <FormikControl control="input" name="gender" label="Gender " id="gender" />
                             </Grid>

                             <Grid item xs={12} md={6}>
                               <FormikControl control="input" name="staffPrimaryPhoneNumber" label=" Primary PhoneNumber" id="staffPrimaryPhoneNumber" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                               <FormikControl control="input" name="staffSecondaryPhoneNumber" label=" Secondary Phone Number" id="staffSecondaryPhoneNumber" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <FormikControl control="input" name="staffEmail" label="Staff Email " id="staffEmail" />
                             </Grid>

                            <Grid item xs={12} md={6}>
                              <FormikControl control="input" name="confirmstaffEmail" label="Confirm Staff Email " id="confirmstaffEmail" />
                             </Grid>

                            
                        <Grid item xs={12} md={12}>
                               
                            <Box mt={3}>
                                <Divider className={classes.divider} />
                            </Box>

                            </Grid>
                            
                             <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="houseNumber" label="House Number" id="houseNumber" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                              <FormikControl control="input" name="city" label="City " id="city" />
                             </Grid>

                             <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="region" label="Region" id="region" />
                            </Grid>


                            <Grid item xs={12} md={4}>
                              <FormikControl control="input" name="staffType" label="Staff Type " id="staffType" />
                             </Grid>

                             <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="staffRank" label="Staff Rank" id="staffRank" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="dateHired" label="Date Hired "id="dateHired" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="uploadPicture" label="Upload Picture"id="uploadPicture" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="uploadResume" label="Upload Resume"id="uploadResume" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <FormikControl control="input" name="uploadID" label="Upload ID"id="uploadID" />
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
                            >Back</Button>
                        </Grid>

                        <Grid  className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                    // onClick= {props.next}
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



    );
}


