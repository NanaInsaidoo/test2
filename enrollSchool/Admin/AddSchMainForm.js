import React, { useState ,useEffect } from 'react';
import { grey, deepPurple, red } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import AddSchoolDetail from './AddSchoolDetail';
import AddSchoolStaff from './AddSchoolStaff';
import AddSchoolClass from './AddSchoolClass';

import AddSchoolReviewForm from './AddSchoolReviewForm';


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
  
    const [uploadPicture, setUploadPicture] = useState("No Photo uploaded");
    const [uploadResume, setUploadResume] = useState("No Resume uploaded");
    const [uploadID, setUploadID] = useState("No ID uploaded");

    const [file, setFile] = useState("original");
    const [activeStep, setActiveStep] = useState(0);



    useEffect(() => {
      console.log("wooooorked!!!")
  
    }, [file])

    
  const onChange = async (e,f) => {

   setFile(e.target.files[0].name);
  
    console.log("file",file)
    
    console.log("e",e.target.name)
    console.log("f",f)

};

const onChangePicture = async (e,f) => {
  e.preventDefault()

  setUploadPicture(e.target.files[0].name);
   console.log("uploadPicture",uploadPicture)
   
   console.log("e",e.target.name)
   console.log("e1",e)

};


const onChangeID = async (e,f) => {
  e.preventDefault()

  setUploadID(e.target.files[0].name);
 
   console.log("uploadID",uploadID)
   
   console.log("e",e.target.name)
   console.log("f",f)

};

const onChangeResume = async (e,f) => {
  e.preventDefault()

  setUploadResume(e.target.files[0].name);
 
   console.log("uploadResume",uploadResume)
   
   console.log("e",e.target.name)
   console.log("f",f)

};



const deletePicture = async (e,f) => {
  e.preventDefault()
  setUploadPicture("No Photo uploaded");
};


const deleteID = async (e,f) => {
  e.preventDefault()

  setUploadID("No ID uploaded")

};

const deleteResume = async (e,f) => {
  e.preventDefault()

  setUploadResume("No Resume uploaded");
 

};

    
    
    // const { values, submitForm } = useFormikContext();
    // console.log("values",values)
    const steps = ['Basic', 'Admin User','Class','Review', 'Finish'];
  
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
  
    const onSubmit =  (submitProps, e) => {
      console.log("gugugu",submitProps.values)
      // await sleep(1000);
      e.setSubmitting(false);
 
      // if (submitProps.values.hhh === "values.hhh") {
        
      //  alert("jjjjj")
       
      //   }else{
      
      //   }
         setActiveStep(activeStep + 1);
      // console.log("initial values",initialValues);

    
      console.log("submitProps", submitProps);
      console.log("e", e);
      console.log("step",activeStep);
      // e.setFieldValue("hhh",file)
      e.setFieldValue("uploadPicture",uploadPicture)
      e.setFieldValue("uploadResume",uploadResume)
      e.setFieldValue("uploadID",uploadID)

      
      // e.values.append("uploadResume",file)
    
   console.log("step",activeStep);
       e.preventDefault();
    }

  
    function _renderStepContent(activeStep,sd)  {
      
        switch (activeStep) {

            case 0:
              return <AddSchoolDetail previous ={previous} next={next}/>;
            case 1:
              return<AddSchoolStaff previous ={previous} next={next} sd={sd}
               onChange ={onChange} myLabel={file} uploadID={uploadID} uploadPicture = {uploadPicture} uploadResume ={uploadResume}
               onChangeID={onChangeID} onChangePicture = {onChangePicture} onChangeResume ={onChangeResume} 
               deletePicture= {deletePicture}  deleteResume= {deleteResume} deleteID={deleteID}
               />;
            case 2:
              return <AddSchoolClass previous ={previous} next={next} />;
            case 3:
              return <AddSchoolReviewForm previous ={previous} next={next}  sd={sd}/>;
              
            case 4:
              return <AddSchoolSuccess previous ={previous} next={next} sd={sd} />;
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

                {_renderStepContent(activeStep,formik)}
                <button
                  type='submit'
                >
                  Next
                              </button>
  
     
  
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
  