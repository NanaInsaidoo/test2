import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AdminNavBar from "./AdminNavBar"
import UserSettings from "./UserSettings"
import Avatar from '@material-ui/core/Avatar';
import Admin_photo from './Admin_photo.jpg'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EditIcon from '@material-ui/icons/Edit';
import EditName from './EditName'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        background: "",
        width: "20",
        height: "300px",
        display: "flex"
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
        background: "",
        // height: "400px",
        // width:"800px",
    },
    main_container2: {
        background: "red",
    },
    
    user_profle_pic: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },

    typography: {
        useNextVariants: true,
        color: theme.palette.text.secondary,
        fontSize: 18,
        fontFamily: "Montserrat",
        fontWeight: 300,
        textAlign: 'center',
    },

    typography2: {
        useNextVariants: true,
        color: theme.palette.text.secondary,
        fontSize: 15,
        fontFamily: "Montserrat",
        fontWeight: 300,
        padding: theme.spacing(-2),
        margin: theme.spacing(-1),
            }
}));


export default function AdminProfile() {
    const classes = useStyles();

    return (

        <div className={classes.root}>

            <Grid
                className={classes.main_container}
                container
                direction="column"
                justify="center"
                alignItems="center"
                
            >
                <Grid item sm={12} >
                    <Avatar alt="Remy Sharp" src={Admin_photo} className={classes.user_profle_pic} />
                </Grid>

                <Grid item sm={12}>
                    <Typography variant="h6" gutterBottom>Diamatic Kojo</Typography>
                </Grid>

                <Grid item sm={12}>
                    <Typography className = {classes.typography}>diamatic2000@yahoo.co.uk</Typography>
                </Grid>

                <Grid item sm={12} >
                    <Typography className = {classes.typography}>Here's some info about your account. You can manage your account through the tabs.</Typography>
                    <Divider />

                </Grid>



            </Grid>
            <Grid
                className={classes.main_container}
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={1}
            >

                
                <Grid item xm={2} >
                    <PermIdentityIcon/>
                </Grid>

                <Grid item xm={8}>
                    <Typography className = {classes.typography1} variant="h6" >Account Name</Typography>


                </Grid>
                <Grid item >
                   <EditName/>
                  </Grid>
                <Grid container
                 direction="row"
                 justify="space-around"
                 alignItems="center"
                 spacing={1}
                >

                <Grid item >
                <Typography className = {classes.typography1} variant="h7" >.Diamatic Kojo</Typography>
                  </Grid>

                
                </Grid>

                

               

                


            </Grid>

            <Grid
                className={classes.main_container}
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={1}
            >

                
                <Grid item xm={2} >
                    <PermIdentityIcon/>
                </Grid>

                <Grid item xm={8}>
                    <Typography className = {classes.typography1} variant="h6" >Account Name</Typography>


                </Grid>
                <Grid item >
                   <EditName/>
                  </Grid>
                <Grid container
                 direction="row"
                 justify="space-around"
                 alignItems="center"
                 spacing={1}
                >

                <Grid item >
                <Typography className = {classes.typography1} variant="h7" >.Diamatic Kojo</Typography>
                  </Grid>

                
                </Grid>

                

               

                


            </Grid>

            <Grid
                className={classes.main_container}
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={1}
            >

                
                <Grid item xm={2} >
                    <PermIdentityIcon/>
                </Grid>

                <Grid item xm={8}>
                    <Typography className = {classes.typography1} variant="h6" >Account Name</Typography>


                </Grid>
                <Grid item >
                   <EditName/>
                  </Grid>
                <Grid container
                 direction="row"
                 justify="space-around"
                 alignItems="center"
                 spacing={1}
                >

                <Grid item >
                <Typography className = {classes.typography1} variant="h7" >.Diamatic Kojo</Typography>
                  </Grid>

                
                </Grid>

                

               

                


            </Grid>

            <Grid
                className={classes.main_container}
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={1}
            >

                
                <Grid item xm={2} >
                    <PermIdentityIcon/>
                </Grid>

                <Grid item xm={8}>
                    <Typography className = {classes.typography1} variant="h6" >Account Name</Typography>


                </Grid>
                <Grid item >
                   <EditName/>
                  </Grid>
                <Grid container
                 direction="row"
                 justify="space-around"
                 alignItems="center"
                 spacing={1}
                >

                <Grid item >
                <Typography className = {classes.typography1} variant="h7" >.Diamatic Kojo</Typography>
                  </Grid>

                
                </Grid>

                

               

                


            </Grid>
            
        </div>
    )
}