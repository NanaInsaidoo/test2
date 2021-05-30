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
      padding:"20px",
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
          uplaod:{
            margin:"6px",
            border: `1px solid ${deepPurple[500]}`,
            marginTop: "12px",
            marginLeft:"-6px"

          },
          uplaodOuterDiv:{
            margin:"6px",
           
            marginTop: "22px",
            
      

          }
  }));


export default function ImageUpload(props) {
  
const [value, setValue] = React.useState();

// const handleChange = (props,event )=> {
//     setValue(event.target.value);
//     props.sd.setFieldValue( name, event.currentTarget.files[0].name)
//   };
  
    const [image, setImage] = useState();


  const classes = useStyles();
    const {label, name,myLabel, deleteFile} = props

    if (myLabel==="original") {

      return (
        <div className={classes.uplaodOuterDiv}>
           <div className={classes.uplaod}>
           
        <label className={classes.label} htmlFor = {name}> <Button variant="contained"  component="span" className={classes.margin}>
        {/* {myLabel ==="original" ? 'Upload Photo' : 'Delete or Change Photo'} */} upload photo
        </Button></label>{myLabel}


                <input className = {classes.MyInput}   id = {name} readonly type="file" style={{display: 'none',}}
                name  = {name} 
                onChange= {props.onChange} 

               
                onClick={myLabel ==="original" ? null : {deleteFile} }
                 
            //     onChange ={(event) => {
                   
            
            //         console.log("dd",props.sd)
            //         console.log("event",event)
            //         // console.log(image.name)
            //         props.sd.setFieldValue( name, event.currentTarget.files[0].name)
            //         // console.log(image.name)
            //         console.log( "kkkk",props.sd)
            //       }}
            //   image
                 />

                 

                <div style= {{color:"red"}}> <ErrorMessage name = {name} /> </div>
                {/* <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button> */}
        </div>
        </div>
    )
      
    } else {
      return (
        <div className={classes.uplaodOuterDiv}>
             {myLabel} uploaded successfully
             <Button variant="contained"  component="span" className={classes.margin} onClick={deleteFile}>
        {/* {myLabel ==="original" ? 'Upload Photo' : 'Delete or Change Photo'} */} DELETE
        </Button>
        </div>
    )
      
    }
   
}
