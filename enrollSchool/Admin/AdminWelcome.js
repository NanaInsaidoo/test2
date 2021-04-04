import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Link, Typography } from '@material-ui/core';
import AdminNavBar from "./AdminNavBar"
import UserSettings from "./UserSettings"
import ListOfManager from "./ListOfManager"
import Box from '@material-ui/core/Box';
import SummaryStatAdmin from "./SummaryStatAdmin"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
         width:"20",
        height: "300px",
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


export default function AdminWelcome() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    
const handleDrawerClose = () => {
    setOpen(!open);
  };
    return (
       
        <div  className={classes.root}>
            <AdminNavBar/>
            
            <div onClick={handleDrawerClose}>
                 <SummaryStatAdmin/>
             <Box mt ={10} fontWeight="Bold" Font size = {"42"} textAlign="center">List of Accout Managers</Box>
             <Box mt={4}>

             <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
            <Grid item lg={8}
             alignItems="center"
            
             >
                 <Box  pb={2}><Button href="/addmanager" variant="outlined" color="primary"> 
                 {/* <Link className={null} href="/addschool" onClick={null} color="inherit">
    {  "Add a new Manager"}
  </Link> */} Add A Manager
              </Button></Box>
                 <ListOfManager/>
                 
                 </Grid>
             </Grid>
            
            </Box>






































            
            </div>
        </div>


       
    );
}


