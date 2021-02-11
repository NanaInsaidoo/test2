import * as Yup from 'yup';
import React from 'react';


export default  [

    Yup.object({

        nameOfSchool: Yup.string().required('required'),
        schoolRegistrationID: Yup.string().required('Required')
        

    }),
     Yup.object({

        
        businessRegistrationID: Yup.string().required('Required'),
        primaryPhoneNumber: Yup.string().required('Required'),

    })
]