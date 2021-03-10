import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider, Typography } from '@material-ui/core';
import AdminNavBar from "./AdminNavBar"
import UserSettings from "./UserSettings"
import ListOfManager from "./ListOfManager"
import Box from '@material-ui/core/Box';
import SummaryStatAdmin from "./SummaryStatAdmin"
import Manager from "./manager.png"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: "red",
        // background: "red",

        height: "180px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    paper1: {
        padding: theme.spacing(0),
        textAlign: 'left',
        color: "black",
        // background: "green",
        idth: "330px",
        height: "180px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:""
    },
    paper2: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: "blue",
        // background: "aqua",
        idth: "330px",
        height: "180px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper3: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: "blue",
        // background: "yellow",
        width: "auto",
        height: "180px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pic: {
        width: "250px",
        height: "15765px",
    },

    card: {
        width: "auto",
        height: "150px",
        borderRadius: 16
        , borderTopColor: "red",
        marginTop: "15px"
    },
    root: {

        // paddingBottom:"20px"
        border: "0px"
    }
    

}));


export default function AdminWelcome() {
    const classes = useStyles();



    return (
        <div>
            <div className={classes.root}>
                <AdminNavBar />
            </div>

            <div>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >

                    <Grid item xs={12} sm={12} md={6} lg={2} >
                        <Paper className={classes.paper}>
                            <img src={Manager} alt='' className={classes.pic} alignItems="right" />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card >
                            <CardContent className={classes.paper1} >
                            <Box className={classes.Box} class=" MuiTypography-h6" textAlign="left"
                                
                            >
                                JOHN SOWER</Box>

                            <Box class="MuiTypography-root">Atlanta Hawks •#8 • Shooting Guard </Box>
                            </CardContent>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper className={classes.paper3} >
                            <div >
                                <Card className={classes.card} variant="outlined" style={{ borderTopWidth: "29px" }}>
                                    <CardContent>
                                        <Card className={classes.root} variant="outlined">
                                            <Grid
                                                container
                                                direction="row"
                                                justify="center"
                                                alignItems="flex-start"
                                                border={13}
                                            >

                                                <CardContent>
                                                    <Box color="gray"> D.O.B </Box>
                                                    <Box color="black" fontWeight="500" fontSize="0.75rem"> 17 March 2020 </Box>
                                                </CardContent>
                                                <CardContent>
                                                    <Box color="gray"> D.O.B </Box>
                                                    <Box color="black" fontWeight="500" fontSize="0.75rem"> 17 March 2020 </Box>
                                                </CardContent>
                                                <CardContent>
                                                    <Box color="gray"> D.O.B </Box>
                                                    <Box color="black" fontWeight="500" fontSize="0.75rem"> 17 March 2020 </Box>
                                                </CardContent>
                                            </Grid>
                                            <CardActions>
                                            </CardActions>
                                        </Card>




                                    </CardContent>
                                    <CardActions>
                                        {/* <Button size="small">Learn More</Button> */}
                                    </CardActions>
                                </Card>
                            </div>
                        </Paper>
                    </Grid>


                </Grid>
            </div>

        </div>



    );
}


