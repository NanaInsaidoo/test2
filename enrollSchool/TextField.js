import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    MyInput: {
        outline: "0px",
        border: "3",
        borderColor:"transparent",
        borderLeftColor: "transparent",

        borderBottomColor: "red",
        width: "200",
        height: "20px",
    },
  }));




export default function myTextField(props) {
  const classes = useStyles();
    const {label, name} = props
    return (
        <div >
             <label htmlFor = {name}> {label} </label>
                <TextField  type = 'text' id = {name} 
                name  = {name} 
                
                 />
                <div style= {{color:"red"}}> <ErrorMessage name = {name} /> </div>
        </div>
    )
}
