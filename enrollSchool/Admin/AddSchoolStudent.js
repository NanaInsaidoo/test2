import React from 'react'
import FormikControl from "../FormikControl";



function AddSchoolStudent() {
    return (
        <div>
            <FormikControl control="input" name="nameOfSchool" label="Name of School" id="nameOfSchool" />
            <br />
            <FormikControl control="input" name="schoolRegistrationID" label="School Registration ID " id="schoolRegistrationID" />
            <br />
        </div>
    )
}

export default AddSchoolStudent
