import React, { useState } from 'react';import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    Stepper,
    Step,
    StepLabel,
    CircularProgress
  } from '@material-ui/core';
import {Formik,Form,FieldArray} from 'formik'
import * as Yup from 'yup';
import FormikControl from '../FormikControl';
import AAA1 from './AAA1';
import AAA2 from './AAA2';
import AAA3 from './AAA3';
import { Grid } from '@material-ui/core';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const initialValues={
    nameOfSchool:"",
   
    users: [
      {
        name: "",
        email: ""
      }
    ],

}

// const onSubmit = (submitProps,e) => {
//   console.log("initial values",initialValues);

  
//   console.log("submitProps",submitProps);
//   console.log("e-values",e);
//   console.log('1');
//   window.setTimeout(() => {
//     console.log('2');
//     e.setSubmitting(false);
    
//   e.resetForm();


//   }, 0);
//   console.log('3');

// }




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
  
  myFieldArray: {border:"5px", borderStyle: "SOLID", borderColor:"red"
              }

}));

export default function AAA() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

//    const { values, submitForm } = useFormikContext();
  // console.log("values",values)
  const steps = ['Form 1', 'Form 2', 'Success'];

  const isLastStep = activeStep === steps.length - 1;


  const validationSchema = null

  const onSubmit = async (submitProps, e) => {
    await sleep(1000);
    e.setSubmitting(false);

    next();
    // console.log("initial values",initialValues);


    console.log("submitProps", submitProps);
    console.log("e-values", e);

  }
function next() {
    sleep(500)
    setActiveStep(activeStep + 1);
    //   actions.setTouched({});
    //   actions.setSubmitting(false);

  }

  // async function next() {
  //     sleep(50000)
  //     setActiveStep(activeStep + 1);

  // }


  async function previous() {
    setActiveStep(activeStep - 1);
  }

  const handleChange = (formik) => {
    const { name, value } = formik.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));

    console.log("e",formik)

  
  };

  function _renderStepContent(activeStep,formik) {
    switch (activeStep) {
      case 0:
        return <AAA1 onSubmit={null} previous ={previous} next={next}/>;
      case 1:
        return <AAA2 onSubmit={null} previous ={previous} next={next} />;
      case 2:
        return <AAA3 onSubmit={null} previous ={previous} next={next} />;
      default:
        return <div>Congratulation submitted</div>;
    }
  }



  
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

          <Grid Container>

                <Grid lg= {12}> 
                <Form  className={classes.form } >
          
          <Stepper activeStep={activeStep} >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {_renderStepContent(activeStep,formik)}


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
            
   
            <button
                  type='button'
                  onClick={previous}
                >
                  Previous
                </button>

                <button type='submit'                >
                  Next
                 </button>

  
                {activeStep}
      
        </Form>
                </Grid>

                <Grid>
                    
                </Grid>

                <Grid>
                    
                </Grid>

          </Grid>  
       
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