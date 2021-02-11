 import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from "./FormikControl";


const initialValues={
  classLevelName: "drop down",
  classLevelStreams: "drop down",
  tuitionFee: "25.00",
  classLotherFee:""
 
}

const onSubmit = (values,submitProps) => {
  console.log('Form data', values)
  console.log('submitProps', submitProps)

  console.log('1');

  window.setTimeout(() => {
    console.log('2');
    submitProps.setSubmitting(false)
    submitProps.resetForm()

  }, 5000);
  console.log('3');

}
const validationSchema = Yup.object({
    
    classLevelName: Yup.string().required('required'),
    classLevelStreams: Yup.string().required('Required'),
    tuitionFee: Yup.string().required('Required'),
    classLotherFee: Yup.string().required('Required'),



    

  })

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

export default function AddClass() {
  const classes = useStyles();

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

          {/* <Avatar alt="School App" src={logo} className={classes.logoSignIn} /> */}
        <Typography component="h1" variant="h5" >
             Add a Class and Fees
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
          
            <FormikControl control= "input" name ="classLevelName" label = "Class Level" id = "classLevelName"/>
        <br/>
            <FormikControl control= "input" name ="classLevelStreams" label = " Number Of Streams For Class" id = "classLevelStreams"/>
        <br/>
            <FormikControl control= "input" name = "tuitionFee" label = "Tuition Fee for Class " id = "tuitionFee"/>
        <br/> 
            <FormikControl control= "input" name = "classLotherFee" label = "Other Fees" id = "classLotherFee"/>
       
        <button>Add another fee</button>
        <br/>
        <br/>
               <button type = "submit" disabled = {formik.isSubmitting}> Submit </button>
      
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

