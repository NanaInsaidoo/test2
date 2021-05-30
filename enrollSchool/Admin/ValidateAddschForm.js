import * as Yup from 'yup';
import React from 'react';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// const phoneRegExp =/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
const website =/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const validationSchemaArray=  [

    Yup.object().shape({
        // nameOfSchool :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // schoolRegistrationID :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // businessRegistrationID :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // // primaryPhoneNumber :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // primaryPhoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("required"),

        // secondaryPhoneNumber : Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        // schoolemail :Yup.string().email('Invalid email').min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // // schoolWebsite :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!')
        // // schoolWebsite :Yup.string().matches(website, 'url is not valid').required("required"),
        // schoolWebsite: Yup.string()
        // .matches(
        //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        //     'Enter correct url!'
        // )
        // .required('Please enter website'),
        
      }),
    
      Yup.object().shape({
    
        // firstName :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // lastName :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // middleName :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        // dateOfBirth :Yup.string().required('Required').nullable(),
        // gender :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // staffPrimaryPhoneNumber : Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("required"),
        // staffSecondaryPhoneNumber : Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("required"),
        // staffEmail :Yup.string().email('Invalid email').required('Required'),
        // confirmstaffEmail :Yup.string().email('Invalid email').required('Required'),
        // houseNumber :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // city :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // region :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // staffType :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // staffRank :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // dateHired :Yup.string().required('Required').nullable(),
        // uploadPicture :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        // uploadResume :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        // uploadID :Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        
      }),
      Yup.object().shape({
     levels: Yup.array().of(
        Yup.object().shape({
          classLevelsName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
          classLevelsQuantity: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
         
        })
     )})
      
]
export default validationSchemaArray