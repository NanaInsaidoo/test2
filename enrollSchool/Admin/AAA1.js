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
width:"100%"


    },
    item3: {
width:"100%"

    },

    paper: {
        padding: theme.spacing(4),
        textAlign: 'left',
        background: "",
        width: "100%",
    


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
,
ppp:{

}

}));


function AAA1(props) {
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

        <Grid item sm={10} md ={10} lg={12} className={classes.item0} >
            <Grid container
            >



                <Paper className={classes.paper}>
                {props.value}
                   <Grid xs={12} >
                  <Typography>Basic Information</Typography> 
                   </Grid>
               
                        <Divider className={classes.divider} />
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            {/* <label  >
                                <Box mb={1} mt={3}  fontWeight="fontWeightMedium">Name of School:</Box>
                                    <input name = "nameOfSchool" className={classes.inputbox} value = {props.values.nameOfSchool} onChange={props.handleChange}/>
                            </label> */}
                        <FormikControl control="input" name="nameOfSchool" label="Name of School" id="nameOfSchool" />
                        </Grid>
                        
                        {/* <Grid item xs={12} md={6}>
                             <label >
                                <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> School Registration ID:</Box>
                                       <input type="text" className={classes.inputbox} />
                            </label>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <label >
                                <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Business Registration ID:</Box> 
                                        <input type="text" className={classes.inputbox} />
                            </label>
                        </Grid>
                        
                        <Grid xs={12} md={6}>
                            <label >
                                <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Email of School:</Box>
                                         <input type="text" className={classes.inputbox} />
                            </label>
                        </Grid>


                        <Grid xs={12} md={6}>
                            <label >
                                <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Primary Phone Number:</Box>
                                         <input type="text" className={classes.inputbox} />
                            </label>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <label >
                                <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Secondary Phone Number:</Box>
                                         <input type="text" className={classes.inputbox} />
                            </label>
                        </Grid>

                        <Grid item xs={12} md={6}>
                                    <label >
                                        <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Website:</Box>
                                            <input type="text" className={classes.inputbox} />
                                    </label>
                                
                                </Grid>
                                <Grid item xs={12} md={6}>
                                     <label >
                                        <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Social Media:</Box>
                                               <input type="text" className={classes.inputbox} />
                                    </label>
                                </Grid> */}

                        

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

export default AAA1
