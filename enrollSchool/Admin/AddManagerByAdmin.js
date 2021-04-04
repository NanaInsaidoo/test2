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


    export default function AddManagerByAdmin() {
        const [open, setOpen] = React.useState(false);
        const classes = useStyles();


        const handleDrawerClose = () => {
            setOpen(!open);
        };
        return (

            <div >
                <AdminNavBar />

                <div onClick={handleDrawerClose}>
                    <SummaryStatAdmin />
                
                    
                    
                    <div>
                <Grid container className={classes.root} justify="center"
                >

                    <Grid item sm={10} md ={10} lg={6} className={classes.item0} >
                        <Grid container
                        >

                            <Paper className={classes.paper}>
                            <Box borderColor="red" mt={3} mb={5} fontWeight="Bold" fontSize={20} textAlign="left">
                                Add a Staff     
                                </Box>
                            <Box mt={6}>
                                    <Divider className={classes.divider} />
                                </Box>
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> First Name:</Box>
                                                <input type="text" className={classes.inputbox} required= "true" />
                                        </label>
                                    
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Last  Name:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Middle  Name:</Box> 
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                    
                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Date of Birth:</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>


                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Gender:</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                </Grid>

                                <Box mt={6}>
                                    <Divider className={classes.divider} />
                                </Box>


                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> primary Number:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Secondary Phone number:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Email Address:</Box> 
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                    
                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Confirm Email Address:</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                                
                                    <Grid xs={12}>

                                        <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Address:</Box>
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> House Number or Description :</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                    

                                
                                    

                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Town:</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> City:</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Region:</Box>
                                                    <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                </Grid>
                                <Box mt={6}>
                                    <Divider className={classes.divider} />
                                </Box>



                                <Grid container>

                                    <Grid item xs={12} md={4}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Staff Type:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Staff Rank:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Date Hired:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Upload Picture:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Upload Resume:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
                                    </Grid>
                                
                                    <Grid item xs={12} md={4}>
                                        <label >
                                            <Box mb={1} mt={3}  fontWeight="fontWeightMedium"> Upload ID:</Box>
                                                <input type="text" className={classes.inputbox} />
                                        </label>
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
                                        <Button size="large"   variant="outlined" color="primary">Clear</Button>
                                    </Grid>

                                    <Grid  className={classes.buttons}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                    >
                                                        Save
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


