import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from "./FormikControl";


const initialValues={
    nameOfSchool:"hh",
    schoolRegistrationID: "hh",
    businessRegistrationID: "h",
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    schoolEmail: "",
    socialMediaNameURL: "",
    webSite: "",
    users: [
      {
        name: "deshan madurajith",
        email: "desh@email.com"
      }
    ]
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
    users: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Name required"),
            email: Yup.string()
              .required("email required")
              .email("Enter valid email")
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
  logoSignIn:{width:"100px", height:"100px"}
}));



export default function MainSchoolFormcopy() {
  const classes = useStyles();


  function onSubmit(values) {
    
    console.log('Form data', values)
    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

          {/* <Avatar alt="School App" src={logo} className={classes.logoSignIn} /> */}
        <Typography component="h1" variant="h5" >
             Add a school1
        </Typography>
     <Formik
     initialValues = {initialValues} 
     onSubmit = {onSubmit}
     validationSchema = {validationSchema}
     >
        {formik => {

          return (
        <Form  className={classes.form } onSubmit = {onSubmit} >
          
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
            <FormikControl control= "input" name = "socialMediaNameURL" label = "SocialMediaNameURL URL" id = "socialMediaNameURL"/>
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
                        <div key={index}>
                          {/* <Field
                            placeholder="user name"
                             name={`users.${index}.name`}
                          />
                          <ErrorMessage name={`users.${index}.name`} /> */}
                          <FormikControl control= "input" name ={`users.${index}.name`} label = "Name of School" id = {`users.${index}.name`}/>
                          <br />

                          {/* <Field
                            placeholder="user email"
                            name={`users.${index}.email`}
                          />
                          <ErrorMessage name={`users.${index}.email`} /> */}
                           <FormikControl control= "input" name ={`users.${index}.email`} label = "email of School" id = {`users.${index}.email`}/>

                          <br />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
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
            }
          }
          />
    
       <br/>

       <button type='submit' disabled={!formik.isValid } >       Submit
            </button>      
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

