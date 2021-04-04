import React, { useState } from 'react';
import { grey, deepPurple, red } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import AddSchoolDetail from './AddSchoolDetail';
import AddSchoolStaff from './AddSchoolStaff';
import AddSchoolClass from './AddSchoolClass';
import { CircularProgress, Container, CssBaseline, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { FieldArray, Form, Formik } from 'formik';
import FormikControl from '../FormikControl';
import AdminNavBar from "./AdminNavBar"
import SummaryStatAdmin from "./SummaryStatAdmin"
import AddSchoolSuccess from './AddSchoolSuccess';


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default function Form12() {
  
    const [activeStep, setActiveStep] = useState(0);
    // const { values, submitForm } = useFormikContext();
    // console.log("values",values)
    const steps = ['Form 1', 'Form 2','Form 1', 'Success'];
  
    const isLastStep = activeStep === steps.length - 1;
  
    const initialValues = {
      nameOfSchool: "",
      schoolRegistrationID: "",
      businessRegistrationID: "",
      primaryPhoneNumber: "",
  
    }
  
    const validationSchema =null
  
    const onSubmit = async (submitProps, e) => {
      await sleep(1000);
      e.setSubmitting(false);
  
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
        validationSchema={null}
      >
  
        {formik => {
  
          return (
  
  
            <div>
  
              
  
              <Form>
   <AdminNavBar />

                <SummaryStatAdmin />



                  <Stepper activeStep={activeStep} >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
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
                              <FormikControl control="input" name={`users.${index}.name`} label="Name of School" id={`users.${index}.name`} />
                              <br />
  
                              {/* <Field
                              placeholder="user email"
                              name={`users.${index}.email`}
                            />
                            <ErrorMessage name={`users.${index}.email`} /> */}
                              <FormikControl control="input" name={`users.${index}.email`} label="email of School" id={`users.${index}.email`} />
  
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
  