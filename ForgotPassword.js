import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './App.css';
// import logo from "./sample-logo.JPG"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SukuulApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "black"
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoSignIn:{width:"100px", height:"100px"}
}));

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
  
          {/* <Avatar alt="School App" src={logo} className={classes.logoSignIn} /> */}
        <Typography component="h1" variant="h5" className={classes.form}>
        Forgot Email/Password ?
        </Typography>
        <Typography component="h1" variant="subtitle2" className={classes.form}>
        We will send you an email with instructions on how to reset your password.
        </Typography>
        <form className={classes.form } >
          
          

         
           
       
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}