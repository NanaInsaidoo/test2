import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
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
       
        <div>
            <AdminNavBar/>
            <div onClick={handleDrawerClose}> <SummaryStatAdmin/>
             <Box mt ={10} ml={100} fontWeight="Bold" Font size = {"42"} textAlign="center">List of Accout Managers</Box>
             <Box mt={4}>
            <ListOfManager/>
            </Box>
            </div>
</div>

//   <Grid
//   container
//   direction="row"
//   justify="center"
//   alignItems="center"
//   className={classes.root}
// >
//     <Grid item lg={12}>
//          <AdminNavBar/>
//     </Grid>
//     <Grid item lg={12}>
//          <SummaryStatAdmin/>
//     </Grid>
//     <Grid item sm={12}lg={12} >
//     <Box  pb={8}  pt={8} fontWeight="Bold" Font size = {"42"} textAlign="center">List of Accout Managers</Box>        
//     </Grid>

//     <Grid item  sm={12} lg={12}  >
//     <ListOfManager/>
//     </Grid>
    
// </Grid>

       
    );
}


