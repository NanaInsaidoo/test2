import * as Yup from 'yup';
import React from 'react';
import EditDisplayNameForm from './EditDisplayNameForm';


 const val = [

    Yup.object({
        firstName: Yup.string()
        .min(5, 'Must be 15 characters or less')
        .required('Required')
        
    }),
     Yup.object({

        
        businessRegistrationID: Yup.string().required('Required'),
        primaryPhoneNumber: Yup.string().required('Required'),

    })
]
export default val