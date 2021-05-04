import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import EditUserName from './EditUserName';
import EditEmail from './EditEmail';
import EditDisplayName from './EditDisplayName';

import Admin_photo from './Admin_photo.jpg'
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Box from '@material-ui/core/Box';
import EditPassword from './EditPassword';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import LockIcon from '@material-ui/icons/Lock';
import EditPhoneNumber from './EditPhoneNumber';
import LeftHandMenu from './LeftHandMenu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    user_profle_pic: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    typography: {

        useNextVariants: true,

        color: theme.palette.text.secondary,
        fontSize: 18,
        fontFamily: "sans-serif", 
        fontWeight: 300,
        textAlign: 'center',
    },
}));



export default function InteractiveList() {
    const classes = useStyles();

    return (
       <div className={classes.root}>
           <LeftHandMenu/>
            <Grid
                className={classes.main_container}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >

                <Grid item sm={12} >
                    <Avatar alt="Remy Sharp" src={Admin_photo} className={classes.user_profle_pic} />
                    change remove
                </Grid>

                <Grid item sm={12}>
                    <Typography variant="h6" gutterBottom>
                    <Box fontWeight="fontWeightBold" m={1}>   Diamatic Kojo   </Box>
                        </Typography>
                </Grid>

                <Grid item sm={12}>
                    <Typography className={classes.typography} gutterBottom  >
                    <Box fontWeight="fontWeightBold" m={1}> diamatic2000@yahoo.co.uk </Box>
                    </Typography>
               </Grid>

                <Grid item sm={12} >
                    <Typography className={classes.typography}>Here's some info about your account. You can manage your account details</Typography>
                    <Divider />

                </Grid>



            </Grid>

            <div className={classes.demo}>
                <List IconButton="true">

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Single-Display Name"
                            secondary="matic"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditDisplayName />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="User Name"
                            secondary="matic"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditUserName />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Email"
                            secondary="matic"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditEmail />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PhonelinkRingIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Phone"
                            secondary="571 831 1907 | 345 567 7654"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditPhoneNumber/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LockIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Password"
                            secondary="Change Password"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditPassword />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccessTimeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Last sign-in"
                            secondary="Saturday, February 13, 2021 3:10 PM"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccessTimeIcon />
                            </Avatar>
                        </ListItemAvatar>
                    <ListItemText
                            primary="Account Creation Date"
                            secondary="Wednesday, March 13, 2021 3:10 PM"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                               
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                </List>

            </div>
        </div>
    );
}
