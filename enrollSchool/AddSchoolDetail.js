import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {Formik,Form,FieldArray} from 'formik'
import * as Yup from 'yup';
import FormikControl from "./FormikControl"

const initialValues={
    nameOfSchool:"",
    schoolRegistrationID: "",
    businessRegistrationID: "",
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    schoolEmail: "",
    socialMediaNameURL: "",
    webSite: "",
    users: [
      {
        name: "",
        email: ""
      }
    ],
    dateOfBirth: ""
}

const onSubmit = (submitProps,e) => {
  console.log("initial values",initialValues);

  
  console.log("submitProps",submitProps);
  console.log("e-values",e);
  console.log('1');
  window.setTimeout(() => {
    console.log('2');
    e.setSubmitting(false);
    
  e.resetForm();


  }, 5000);
  console.log('3');

}
const validationSchema = Yup.object({
    
    nameOfSchool: Yup.string().required('required'),
    schoolRegistrationID: Yup.string().required('Required'),
    businessRegistrationID: Yup.string().required('Required'),
    primaryPhoneNumber:Yup.string().required('Required'),
    secondaryPhoneNumber:Yup.string().required('Required'),
    schoolEmail:Yup.string().email("Enter a Valid Email").required("Email is Required"),
    socialMediaNameURL: Yup.string().required('Required'),
    webSite: Yup.string(),
    dateOfBirth: Yup.date.string ,
    users: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name required"),
        email: Yup.string().required("email required").email("Enter valid email")
      })
    )

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
  logoSignIn:{width:"100px", height:"100px"},

  myFieldArray: {border:"5px", borderStyle: "SOLID", borderColor:"red"
              }

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
          
          console.log("formik",formik)

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
        <br/>
            <FormikControl control= "input" name = "socialMediaNameURL" label = "Social Media" id = "socialMediaNameURL"/>
        <br/>
            <FormikControl control= "input" name = "webSite" label = "WebSite URL" id = "webSite"/>
       <br/>

       <br/>
            <FormikControl control= "date" name = "dateOfBirth" label = "Date of Birth" id = "dateOfBirth"/>
       <br/>

            <FieldArray
            name="users"
            render={arrayHelpers => {
              // console.log("values",arrayHelpers.form.values.users)
              const users = arrayHelpers.form.values.users;
              return (
                <div >
                  {users && users.length > 0
                    ? users.map((user, index) => (
                        <div key={index} className={classes.myFieldArray}>
                          <FormikControl control= "input" name ={`users.${index}.name`} label = {"School " + (index +1)} id = {`users.${index}.name`}/>
                          <br />


                           <FormikControl control= "input" name ={`users.${index}.email`} label = "email of School" id = {`users.${index}.email`}/>

                          <br />
                            {users.length >1 ? 
                            <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            DELETE
                          </button> :
                          
                          null}
                         
                         
                          <br />
                          <br />
                        </div>
                      ))
                    : null}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        name: "",
                        email: ""
                      })
                    } // insert an empty string at a position
                  >
                    add a User
                  </button>
                  <br />
                  <br />
                  <br />
                  {/* <div>
                    <button type="submit">Form Submit FIELD</button>
                  </div> */}
                </div>
              );
            }}
          />
            
   
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

