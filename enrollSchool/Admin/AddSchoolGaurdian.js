import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from "../FormikControl";


function AddSchoolGaurdian() {

    
    return (
              <div>
                    <FormikControl control="input" name="nameOfSchool" label="Name of School" id="nameOfSchool" />
                    <br />
                    <FormikControl control="input" name="schoolRegistrationID" label="School Registration ID " id="schoolRegistrationID" />
                    <br />
               </div>

    )
}

export default AddSchoolGaurdian
