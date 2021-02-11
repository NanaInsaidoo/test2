  
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm () {
  // const dropdownOptions = [
  //   { key: 'Select your course', value: '' },
  //   { key: 'React', value: 'react' },
  //   { key: 'Angular', value: 'angular' },
  //   { key: 'Vue', value: 'vue' }
  // ]

  // const checkboxOptions = [
  //   { key: 'HTML', value: 'html' },
  //   { key: 'CSS', value: 'css' },
  //   { key: 'JavaScript', value: 'javascript' }
  // ]

  const initialValues = {

    nameOfSchool:"",
    schoolRegistrationID: "",
    businessRegistrationID: "77",
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    schoolEmail: "",
    socialMediaNameURL: "",
    webSite: ""
  }

    const validationSchema = Yup.object({
    nameOfSchool: Yup.string().required('required'),
    schoolRegistrationID: Yup.string().required('Required'),
    businessRegistrationID: Yup.string().required('Required'),
    primaryPhoneNumber:Yup.string().required('Required'),
    secondaryPhoneNumber:Yup.string().required('Required'),
    schoolEmail:Yup.string().email("Enter a Valid Email").required("Email is Required"),
    socialMediaNameURL: Yup.string().required('Required')
  })

  function onSubmit(values) {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
                       <FormikControl control= "input" name ="nameOfSchool" label = "Name of School" id = "nameOfSchool"/>
        <br/>
            <FormikControl control= "input" name ="schoolRegistrationID" label = "School Registration ID " id = "schoolRegistrationID"/>
        <br/>
            <FormikControl control= "input" name = "businessRegistrationID" label = "Business Registration ID " id = "businessRegistrationID"/>
        <br/> 
            <FormikControl control= "input" name = "primaryPhoneNumber" label = "Primary Phone Number" id = "primaryPhoneNumber"/>
        <br/> 
            <FormikControl control= "input" name = "secondaryPhoneNumber" label = "Secondary Phone Number" id = "secondaryPhoneNumber"/>
        <br/>
            <FormikControl control= "input" name = "schoolEmail" label = "School email" id = "schoolEmail"/>
        <br/>
            <FormikControl control= "input" name = "socialMediaNameURL" label = "WebSite URL" id = "socialMediaNameURL"/>
       <br/>

            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default EnrollmentForm