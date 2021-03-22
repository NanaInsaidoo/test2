import React from 'react'
import Button from '@material-ui/core/Button';
import { Field, FieldArray,Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import FormikControl from '../FormikControl';




function Test2() {

    const initialValues={
        nameOfSchool:"",
        schoolRegistrationID: "",
        businessRegistrationID: "",
        primaryPhoneNumber: "",
        
            users: [
             
            ],
      
    }

        // const validationSchema = Yup.object({
        //     nameOfSchool: Yup.string().required('required'),

        //     users: Yup.array().of(
        //         Yup.object().shape({
        //           name: Yup.string().required("Name required"),
        //           email: Yup.string()
        //             .required("email required")
        //             .email("Enter valid email")
        //         })
        //       )
        //   })
          const validationSchema = Yup.object({
            nameOfSchool: Yup.string().required('required'),

            users: Yup.array().of(
                Yup.object().shape({
                  name: Yup.string().required("Name required"),
                  email: Yup.string()
                    .required("email required")
                    .email("Enter valid email")
                })
              )
          })
        


    const onSubmit = async(submitProps, e) => {
        // await sleep(1000);
       e.setSubmitting(false);
       
    //    setActiveStep(activeStep + 1);
       // console.log("initial values",initialValues);


        console.log("submitProps",submitProps);
   console.log("e-values",e);
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

           

            <Form>

            <TextField
          id="nameOfSchool"
          label="Name Of Schoo;"
          type="text"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.nameOfSchool}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.nameOfSchool && formik.errors.nameOfSchool ? (
            <div>{formik.errors.nameOfSchool}</div>
          ) : null}
          error = {formik.touched.nameOfSchool && formik.errors.nameOfSchool }/>

             
              
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
                       
                          {/* <ErrorMessage name={`users.${index}.name`} /> */} 

                            {/* <FormikControl control="input" name={`users.${index}.name`} label="Name of School" id={`users.${index}.name`} /> */}

         <TextField
          id={`users.${index}.name`}
          label="Arra Name Of School;"
          autoComplete="current-password"
          onChange={formik.handleChange}
          // value={`users.${index}.name`} 
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          error = {formik.touched.name && formik.errors.name }/> 

                          {/* <Field
                            placeholder="user email"
                            name={`users.${index}.email`}
                          /> */}
                          {/* <ErrorMessage name={`users.${index}.email`} />  */}
                            {/* <FormikControl control="input" name={`users.${index}.email`} label="email of School" id={`users.${index}.email`} /> */}
         <TextField
          id={`users.${index}.email`}
          label="Arr email of School"
          type="text"
          autoComplete="current-password"
          onChange={formik.handleChange}
          // value={`users.${index}.email`} 
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.name}</div>
          ) : null}
          error = {formik.touched.email && formik.errors.email }/> 

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
                   <div>
                    <button type="submit">Form Submit FIELD</button>
                  </div>
                    </div>
                  );
                }
                }
              />


            </Form>
          </div>

        )


      }}




    </Formik>
  )

}
export default Test2
