import React, { useState } from 'react';
import { grey, deepPurple, red } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import AddSchoolDetail from './AddSchoolDetail';
import AddSchoolStaff from './AddSchoolStaff';
import AddSchoolClass from './AddSchoolClass';
import { Box, CircularProgress, Container, CssBaseline, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { FieldArray, Form, Formik } from 'formik';
import FormikControl from '../FormikControl';
import AdminNavBar from "./AdminNavBar"
import SummaryStatAdmin from "./SummaryStatAdmin"
import AddSchoolSuccess from './AddSchoolSuccess';
import * as Yup from 'yup';
import validationSchemaArray from "./ValidateAddschForm"
import MyFieldArray from './MyFieldArray';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default function Form12() {
  
    const [activeStep, setActiveStep] = useState(0);
    // const { values, submitForm } = useFormikContext();
    // console.log("values",values)
    const steps = ['Basic', 'Admin User','Class', 'Finish'];
  
    const isLastStep = activeStep === steps.length - 1;
  
    const initialValues = {

        nameOfSchool : "",
        schoolRegistrationID : "",
        businessRegistrationID : "",
        primaryPhoneNumber : "",
        secondaryPhoneNumber : "",
        schoolemail : "",
        schoolWebsite : "",

        firstName : "",
        lastName : "",
        middleName : "",
        dateOfBirth : "",
        gender : "",
        staffPrimaryPhoneNumber : "",
        staffSecondaryPhoneNumber:"",
        staffEmail : "",
        confirmstaffEmail : "",
        houseNumber : "",
        city : "",
        region : "",
        staffType : "",
        staffRank : "",
        dateHired : "",
        uploadPicture : "",
        uploadResume : "",
        uploadID : "",

        levels: [
          {
            classLevelsName: "",
            classLevelsQuantity: ""
          }
        ]
  
    }

   
  
    const onSubmit = async (submitProps, e) => {
      await sleep(1000);
      // e.setSubmitting(false);
  
      setActiveStep(activeStep + 1);
      // console.log("initial values",initialValues);
  
      console.log("submitProps", submitProps);
      console.log("e-values", e);
  
    }
  
    function _renderStepContent(activeStep) {
      
        switch (activeStep) {

            case 0:
              return <AddSchoolDetail previous ={previous} next={next}/>;
            case 1:
              return <AddSchoolStaff previous ={previous} next={next} />;
            case 2:
              return <AddSchoolClass previous ={previous} next={next} />;
              case 3:
              return <AddSchoolSuccess previous ={previous} next={next} />;
            default:
              return <div>Congratulation submitted</div>
      }

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
    
    return (
  
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaArray[activeStep]}
      >
  
        {formik => {
  
          return (
  
  
            <div>
            <Form>
            <AdminNavBar />
            <SummaryStatAdmin />

            <Grid   container spacing={1}
                direction="row"
                justify="center"
                alignItems="center"> 

            <Grid item lg ={12}>
            <Box align="center" mt={6} ><Typography font="bold" variant="h6" gutterBottom>Add a new School</Typography></Box>
          </Grid>

          <Grid item lg= {6} > 

        <Box mt={3}mb={-1}>
              <Stepper  activeStep={activeStep} >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
        </Box>

      </Grid>
      </Grid>

                {_renderStepContent(activeStep)}
  
                <button
                  type='submit'
                >
                  Next
                              </button>
  
                {activeStep}
  
                <button
                  type='button'
                  onClick={previous}
                >
                  Previous
                              </button>
  
                {activeStep}
  
 
                {formik.isSubmitting && (
                  <CircularProgress
                    size={24}
  
                  />
                )}
              </Form>
            </div>
  
          )
  
  
        }}
 
      </Formik>
    )
  
  }
  