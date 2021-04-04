import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { grey, deepPurple, red } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    
    MyInput: {
      display: "block",
      width: "70%",
      height: "12px",
      padding:"15px",
      // line-height: "1.42857143",
      // color:" #555",
      // background-color: "#fff",
      // background-image:" none",
      // border: 1px solid "#ccc",
       borderRadius: "5px",
      border: `1px solid ${deepPurple[500]}`,
    },
    label: {
        display: "block",
        padding:"12px",
        marginLeft:"-11px"

          },
  }));


export default function Input(props) {
  const classes = useStyles();
    const {label, name} = props
    return (
        <div >
             <label className={classes.label} htmlFor = {name}> {label} </label>
                <Field className = {classes.MyInput} type = 'text' id = {name} 
                name  = {name} 
                 />
                <div style= {{color:"red"}}> <ErrorMessage name = {name} /> </div>
        </div>
    )
}
