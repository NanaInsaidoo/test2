import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { FormControl } from '@material-ui/core';
import FormikControl from "./FormikControl"

const initialValues={
    nameOfSchool:"",
    schoolRegistrationID: "",
    businessRegistrationID: "",
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    schoolEmail: "",
    socialMediaNameURL: "",
    webSite: ""
}

const onSubmit = (submitProps) => {
  

  console.log('1');
  window.setTimeout(() => {
    console.log('2');
    submitProps.setSubmitting(false)
    submitProps.resetForm()


  }, 5000);
  console.log('3');

}
const validationSchema =null

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
  error:{color: "red",
  marginTop: theme.spacing(1),
},
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoSignIn:{width:"100px", height:"100px"}
}));

export default function AddSchoolDetail() {
  const classes = useStyles();

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

          {/* <Avatar alt="School App" src={logo} className={classes.logoSignIn} /> */}
        <Typography component="h1" variant="h5" >
             Add a school 
        </Typography>
     <Formik
     initialValues = {initialValues} 
     onSubmit = {onSubmit}
     validationSchema = {validationSchema}
    //  enableReinitialize={true}
     >
        {formik => {

          return (
        <Form  className={classes.form } >
          
            <FormikControl control= "input" name ="nameOfSchool" label = "Name of School" id = "nameOfSchool"/>
        <br/>
            <FormikControl control= "input" name ="schoolRegistrationID" label = "School Registration ID " id = "schoolRegistrationID"/>
        <br/>
            <FormikControl control= "input" name = "businessRegistrationID" label = "Business Registration ID " id = "businessRegistrationID"/>
        <br/> 
            <FormikControl control= "input" name = "primaryPhoneNumber" label = "Primary Phone Number" id = "primaryPhoneNumber"/>
        <br/> 
            <FormikControl control= "input" name = "secondaryPhoneNumber" label = "Secondary Phone Number" id = "secondaryPhoneNumber"/>
        <br/>
            <FormikControl control= "input" name = "schoolEmail" label = "School email" id = "schoolEmail"/>
        <br/>
            <FormikControl control= "input" name = "webSite" label = "WebSite URL" id = "webSite"/>
       <br/>
               <button type = "submit" disabled = {formik.isSubmitting} > Submit </button>
      
        </Form>
        )
      }}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

