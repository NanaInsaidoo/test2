import { ErrorMessage, Field } from 'formik'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey, deepPurple, red } from "@material-ui/core/colors";
import { Button, Input } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';




const useStyles = makeStyles((theme) => ({

  MyInput: {
    display: "block",
    width: "70%",
    height: "12px",
    padding: "20px",
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
    padding: "12px",
    marginLeft: "-11px"

  },
  uplaod: {
    margin: "6px",
    border: `1px solid ${deepPurple[500]}`,
    marginTop: "12px",
    marginLeft: "-6px"

  },
  uplaodOuterDiv: {
    margin: "6px",

    marginTop: "22px",

  }
}));

export default function ImageUpload(props) {


  // const handleChange = (props,event )=> {
  //     setValue(event.target.value);
  //     props.sd.setFieldValue( name, event.currentTarget.files[0].name)
  //   };

  const classes = useStyles();
  const { label, name,uploadResume ,deleteResume   } = props

if (uploadResume !== "No Resume uploaded") {

  return ( 
    <div className={classes.uplaodOuterDiv}>
    <div className={classes.uplaod}>

      <label className={classes.label} htmlFor={name}> <Button name = {name} id={name} variant="contained" component="span" className={classes.margin} onClick ={deleteResume} >
         Delete Resume
    </Button></label>{uploadResume}

   </div>
  </div>
  )
  
} else {
  
    return (
      <div className={classes.uplaodOuterDiv}>
        <div className={classes.uplaod}>

          <label className={classes.label} htmlFor={name}> 
          <Button variant="contained" component="span" className={classes.margin}>
            {name}
          </Button></label>{uploadResume}

          <Input className={classes.MyInput} id={name} readOnly type="file" style={{ display: 'none', }}
            name={name}
            onChange={props.onChangeResume} 
          />

          <div style={{ color: "red" }}> <ErrorMessage name={name} /> </div>

        </div>
      </div>
    )
 

    }
}
