import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function Input(props) {

    const {label, name} = props
    return (
        <div className = "form-control">
             <label htmlFor = {name}> {label} </label>
                <Field type = 'text' id = {name} 
                name  = {name} 
                
                 />
                <div style= {{color:"red"}}> <ErrorMessage name = {name} /> </div>
        </div>
    )
}
