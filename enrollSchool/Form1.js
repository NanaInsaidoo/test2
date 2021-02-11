
import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from "./FormikControl";


// const initialValues = {
//     nameOfSchool: "hh",
//     schoolRegistrationID: "hh"
// }


// const validationSchema = Yup.object({

//     nameOfSchool: Yup.string().required('required'),
//     schoolRegistrationID: Yup.string().required('Required'),

// })

// const onSubmit = (submitProps, e) => {
//     console.log("initial values", initialValues);


//     console.log("submitProps", submitProps);
//     console.log("e-values", e)
// }

export default function Form1() {



    return (


           
                    <div  >

                        <FormikControl control="input" name="nameOfSchool" label="Name of School" id="nameOfSchool" />
                        <br />
                        <FormikControl control="input" name="schoolRegistrationID" label="School Registration ID " id="schoolRegistrationID" />
                        <br />

                    </div>
                )
        



}
