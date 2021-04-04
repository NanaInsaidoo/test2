import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import FirstStep from "./FirstStep";
// import SecondStep from "./SecondStep";
// import Confirm from "./Confirm";
// import Success from "./Success";
// import formValidation from "../Helper/formValidation";
import AddSchoolDetail from "./AddSchoolDetail";
import AddSchoolClass from "./AddSchoolClass";
import Success from "./Success";
import FormikControl from "../FormikControl";
import { FieldArray, Form } from "formik";

// Step titles
const labels = ["First Step", "Second Step", "Confirmation"];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  date: "",
  city: "",
  phone: ""
};

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  email: {
    error: "",
    validate: "email"
  },
  gender: {},
  date: {},
  city: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15
  }
};

const FormMain = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));

    // set errors
    // const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
    //   [name]: error
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <AddSchoolDetail
             handleBack={handleBack}
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <AddSchoolClass
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <AddSchoolClass
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      default:
        break;
    }
  };

  return (

    <Form>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <>
          <Box style={{ margin: "30px 0 50px" }}>
            <Typography variant="h4" align="center">
              Multi Step Form
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ margin: "10px 0" }}
            >
              React Material UI multi step form with basic form validation
              logic.
            </Typography>
          </Box>
          <Stepper
            activeStep={activeStep}
            style={{ margin: "30px 0 15px" }}
            alternativeLabel
          >
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}




          <FieldArray
                name="users"
                render={arrayHelpers => {
                  // console.log("values",arrayHelpers.form.values.users)
                  const users = null;
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
                        onClick={console.log(arrayHelpers)} // insert an empty string at a position
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



          
        </>
      )}
    </Form>
  );
};

export default FormMain;
