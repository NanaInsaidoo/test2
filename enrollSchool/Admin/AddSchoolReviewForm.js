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


function AddSchoolReviewForm(props) {

    const values = props.sd.values
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]



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
                                        <Typography onClick= {console.log("Testing sd",values)}> Review and Submit</Typography>
                                    </Grid>

                                    <Grid container spacing={3} align = "left">

                                        <Grid item xs={12} md={12}>
                                            <Divider mb={5} />
                                        </Grid>


                                        <Grid item xs={12} md={12}>
                                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                                        Edit
                                            </Button>                                       
                                        </Grid>

                                  
                                        <Grid item xs={12} md={12}   alignItems="center">
                                            <Typography>
                                               Name of School: {values.nameOfSchool}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                              School Rgistration ID: {values.schoolRegistrationID}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                              Primary Phone Number: {values.primaryPhoneNumber}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                              Secondary Phone Number: {values.secondaryPhoneNumber}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                              Email: {values.schoolemail}
                                            </Typography>
                                        </Grid>

                                        
                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                              Website: {values.schoolWebsite}
                                            </Typography>
                                        </Grid>


                                        <Grid item xs={12} md={12}>
                                            <Divider mb={5} />
                                        </Grid>
       
                                        <Grid item xs={12} md={12}>
                                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                                        Edit
                                            </Button>                                       
                                        </Grid>



                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                               First name: {values.firstName}
                                            </Typography>
                                        </Grid>

                                        
                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                               Last Name : {values.lastName}
                                            </Typography>
                                        </Grid>
                                        
                                         <Grid item xs={12} md={12}>
                                            <Typography>
                                               Middle Name : {values.middleName}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                            Date Of Birth : {values.dateOfBirth.toString().substring(0, 16)}


             
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                           Gender : {values.gender}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                           Staff Primary Phone Number : {values.staffPrimaryPhoneNumber}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                           Staff Secondary Phone Number : {values.staffSecondaryPhoneNumber}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                           Staff Email : {values.staffEmail}
                                            </Typography>
                                        </Grid>

                                      

                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                            HouseNumber : {values.houseNumber}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                            city : {values.city}
                                            </Typography>
                                        </Grid>


                                       
        
                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                            Region : {values.region}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                            Staff Type : {values.staffType}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                            Staff Rank : {values.staffRank}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Typography>
                                            Date Hired : {values.dateHired.toString().substring(0, 16)}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                            Upload Picture : {values.uploadPicture}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                            Upload Resume : {values.uploadResume}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Typography>
                                            Upload ID : {values.uploadID}
                                            </Typography>
                                        </Grid>


                                        <Grid item xs={12} md={12}>
                                            <Divider mb={5} />
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                                        Edit
                                            </Button>                                       
                                        </Grid>

{/* 

                                        <Grid item xs={12} md={4}>
                                            <Typography>
                                            Class Levels Name : {values.levels.map}
                                            </Typography>
                                        </Grid>

                                        
                                        <Grid item xs={12} md={4}>
                                            <Typography>
                                            class Levels Quantity : {values.classLevelsQuantity}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={4}>
                                            <Typography>
                                            class Levels Quantity : {values.classLevelsQuantity}
                                            </Typography>
                                        </Grid> */}
                                        

<Grid item xs={12} md={4}>
                                            <Typography>
                                            Class and quantity
                                            </Typography>
                                        </Grid>

                                   {values.levels.map((value, index) => (
        // <ul><Typography> {value.classLevelsName} --- {value.classLevelsQuantity}  </Typography> </ul>
        
        <Grid item xs={12} md={12}>
      
    {value.classLevelsName}  ----------- {value.classLevelsQuantity}
      
    </Grid>
        ))} 
        




                                        

                                      
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
    )
}

export default AddSchoolReviewForm
