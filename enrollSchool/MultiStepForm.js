import MainSchoolFormcopy from './MainSchoolFormcopy';
import MainSchoolForm from './MainSchoolForm';
import AddSchoolDetail from './AddSchoolDetail';
import { useFormikContext, Formik, Form, Field } from 'formik';


import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


function sleep(ms) {
  return  new Promise(resolve => setTimeout(resolve, 3000));
}

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
// const { values, submitForm } = useFormikContext();
// console.log("values",values)

  function _renderStepContent(activeStep) {
    switch (activeStep) {
      case 0:
        return <AddSchoolDetail />;
      case 1:
        return <MainSchoolForm /> ;

      default:
        return <div>Not Found</div>;
    }}
  
async function next() {
  sleep(50000)
  setActiveStep(activeStep + 1);
}
async function previous() {
  sleep(50000)
  setActiveStep(activeStep - 1);
}



  return (
    <div className="App-header">

{_renderStepContent(activeStep)
}

    <Button variant="contained" color="primary" disableElevation onClick = {previous} >
      Previous
    </Button>
    <Button variant="contained" color="primary" disableElevation onClick = {next} >
      Next
    </Button>
    </div >
  );
}

export default MultiStepForm;
