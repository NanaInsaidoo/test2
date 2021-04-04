import {
  Stepper,
  Step,
  StepLabel,

  Typography,
  CircularProgress,
  Grid,
  Paper
} from '@material-ui/core';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { FieldArray, Form, Formik } from 'formik';
import FormikControl from "../FormikControl";
import * as Yup from 'yup';
import ValidateForm from "../ValidateForm"
import InitialValue from "../InitialValue"
import AddSchoolStudent from './AddSchoolStudent';
import AddSchoolDetail from './AddSchoolDetail';
import AddSchoolGaurdian from './AddSchoolGaurdian';
import AdminNavBar from "./AdminNavBar"
import UserSettings from "./UserSettings"
import ListOfManager from "./ListOfManager"
import Box from '@material-ui/core/Box';
import SummaryStatAdmin from "./SummaryStatAdmin"
import { makeStyles } from '@material-ui/core/styles';
import { grey, deepPurple, red } from "@material-ui/core/colors";

import AddSchoolStaff from './AddSchoolStaff';
import AddSchoolClass from './AddSchoolClass';



const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    // background: "purple",
},
maincontainer: {
},

item0: {

    background: "black",

    height: "300px",
    align: "center"

},
item1: {

    background: "green",

    height: "300px",
    align: "center"

},
item2: {

    background: "red",

    height: "300px",

},
item3: {

    background: "blue",

    height: "300px",

},

paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    background: "",
    width: "100%",
    height: "auto",


},
label: {
    display: "block",
    padding:"23px"    },
    
inputbox:{
    display: "block",
    width: "70%",
    height: "12px",
    padding:"15px",
    // line-height: "1.42857143",
    // color:" #555",
    // background-color: "#fff",
    // background-image:" none",
    // border: 1px solid "#ccc",
     borderRadius: "5px",
    border: `1px solid ${deepPurple[500]}`,
},
divider: {
    // Theme Color, or use css color in quote
    // background: "grey",
},
buttons:{
    margin: theme.spacing(2),
},


}));



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Form12() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  // const { values, submitForm } = useFormikContext();
  // console.log("values",values)
  const steps = ['Basic Info', 'Form 2','Form 3', 'Success'];

  const isLastStep = activeStep === steps.length - 1;

  const initialValues = {
    nameOfSchool: "",
    schoolRegistrationID: "",
   
    businessRegistrationID: "",
    primaryPhoneNumber: "",

  }

  const validationSchema = ValidateForm[activeStep]

  const onSubmit = async (submitProps, e) => {
    await sleep(1000);
    e.setSubmitting(false);

    setActiveStep(activeStep + 1);
    // console.log("initial values",initialValues);


    console.log("submitProps", submitProps);
    console.log("e-values", e);

  }

  const props={label:"ttt",activeStep:4}





  async function next() {
 
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

  function _renderStepContent(activeStep) {
    switch (activeStep) {
      case 0:
        return <AddSchoolDetail previous ={previous} next={next}/>;
      case 1:
        return <AddSchoolStaff previous ={previous} next={next} />;
      case 2:
        return <AddSchoolClass previous ={previous} next={next} />;
      default:
        return <div>Congratulation submitted</div>
    }
  }
  return (



    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >

      {formik => {

        return (

          <div>
                <AdminNavBar />
                <SummaryStatAdmin />

                  <Grid container justify="center" spacing={1}>
             
               <Grid item md={6}>


               <Box borderColor="red" mt={4} mb={5} fontSize={20} textAlign="center">Add a School</Box>

                        <Stepper activeStep={activeStep} >
                        

                            {steps.map(label => (
                              <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                              </Step>
                            ))}
                        </Stepper> 

               </Grid> 

                      <Grid item className={classes.ttt}>
                      <Form>
                        {_renderStepContent(activeStep)}
                      

                        <Grid   container
                          direction="row"
                          justify="flex-end"
                          alignItems="flex-start">

                      <Grid  >
                          <Button size="large"  onClick={previous}  variant="outlined" color="primary"  >Previous</Button>
                      </Grid>

                      <Grid  >
                              <Button
                                  variant="contained"
                                  color="primary"
                                  size="large"
                                  className={classes.button}
                                  type ="submit"                           
                        >
                                         Next
                              </Button>
                      </Grid>

                  </Grid>
{/*           
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
           */}
          
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
                      </Grid>
                 
                  </Grid>
                  

            

           
          </div>

        )


      }}




    </Formik>
  )

}
