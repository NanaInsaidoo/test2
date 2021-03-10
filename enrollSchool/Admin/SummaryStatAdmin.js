import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Admin_photo from './Admin_photo.jpg'
import Photo from './Admin_photo.jpg'
import Pic1 from './images/Pic1.png'
import Pic2 from './images/Pic2.png'
import Pic from './images/Pic.png'


const useStyles = makeStyles((theme) => ({

  paper: {
    margin: theme.spacing(0),
    // width: theme.spacing(2),
    // height: theme.spacing(2),
    // background:"grey" ,
    height: "100px"
  },
  paper2: {
paddingTop:"40px",
alignContent:"30px"
    // background:"green"
  },

  paper3: {
    width: "25%",
    height: "100%"
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    alignContent:"center"
  },
  pic:{
    height:"200px",
    width:"200px"
  }

}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div>
      {/* <Paper  variant="outlined" />
      <Paper variant="outlined" square /> */}


      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.paper2}
        mt={2}
        spacing={2}
       
      >

        <Grid item xs={6} md={6} lg={2} >
          <Paper className={classes.paper}>

            <List className={classes.root}>

              <ListItem >
                
                <ListItemAvatar>
                  <Avatar alt = "" src ={Pic1} >
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="174" secondary="Total Schools" />
              </ListItem>
            </List>

          </Paper>
        </Grid>

        <Grid item xs={6} md={6} lg={2} >
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={Pic}>
                  {/* <Pic className="pic"/> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="134" secondary="Total Students" />
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Paper className={classes.paper}>

            <ListItem>
              <ListItemAvatar>
                <Avatar src={Pic2}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary = {<Box fontWeight = "bold">  18</Box>} secondary="Account Managers" />
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}

          </Paper>
        </Grid>

        <Grid item xs={6} md={6} lg={2} >
          <Paper className={classes.paper}>

            <ListItem>
              <ListItemAvatar>
                <Avatar src={Pic2}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary = {<Box fontWeight = "bold">  18</Box>} secondary="Account Managers" />
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}

          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={2} >
          <Paper className={classes.paper}>

            <ListItem>
              <ListItemAvatar>
                <Avatar src={Pic2}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary = {<Box fontWeight = "bold">  18</Box>} secondary="Account Managers" />
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}

          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}