
import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from "./FormikControl";


// const initialValues = {
//     nameOfSchool: "hh",
//     schoolRegistrationID: "hh"
// }




// const validationSchema = Yup.object({

//     businessRegistrationID: Yup.string().required('Required'),
//     primaryPhoneNumber: Yup.string().required('Required'),

// })

// const onSubmit = (submitProps, e) => {
//     console.log("initial values", initialValues);


//     console.log("submitProps", submitProps);
//     console.log("e-values", e)
// }


export default function Form2() {

    return (

    
                    <div  >

                        <FormikControl control="input" name="businessRegistrationID" label="Business Registration ID " id="businessRegistrationID" />
                        <br />
                        <FormikControl control="input" name="primaryPhoneNumber" label="Primary Phone Number" id="primaryPhoneNumber" />
                        <br />
                    </div>

    )

}
