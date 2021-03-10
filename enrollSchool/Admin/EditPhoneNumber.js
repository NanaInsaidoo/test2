import React from 'react';
 import { useFormik } from 'formik';
 import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Box } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import * as Yup from 'yup';


  
const EditPhoneNumber = () => {


    
  const [open, setOpen] = React.useState(false);

   const formik = useFormik({
     initialValues: {
       primaryPhone: '',
       secondaryPhone:'',
     },

     validationSchema: Yup.object().shape({
      secondaryPhone: Yup.string()
      .matches("^[0-9]*$")
      .required('Password is required'),
     primaryPhone: Yup.string()
      .oneOf([Yup.ref('secondaryPhone'), null], 'Passwords must match'),
     }),

     onSubmit: (values,e) => {
  console.log("e",e) 
        alert(JSON.stringify(values, null, 2));
      setOpen(false);

     }
   });
   const handleClickOpen = () => {
    setOpen(true);
  };
  
  
  const handleClose = (event) => {
    console.log(7)
    // console.log("events",event)
  
    setOpen(false);
  };

       return (

        <div>
        <EditOutlinedIcon color="primary" onClick={handleClickOpen} />
        <Dialog open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          Width={"xs"}
        >

          <DialogTitle id="form-dialog-title">Change Phone</DialogTitle>
          <Box display='flex'><DialogContent>
            <DialogContentText>
              Your Phonee Number is used to represent you.
              It's visible to other users and can be changed any time.
            </DialogContentText>
     <form onSubmit={formik.handleSubmit}>
 

          {/* //Use a flag and country code library */}
         <TextField
          id="primaryPhone"
          label="Primary Phone "
          type="text"
          autoComplete="primaryPhone"
          onChange={formik.handleChange}
          value={formik.values.primaryPhone}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.primaryPhone && formik.errors.primaryPhone ? (
            <div>{formik.errors.primaryPhone}</div>
          ) : null}
          error = {formik.touched.primaryPhone && formik.errors.primaryPhone }
        />

<TextField
          id="secondaryPhone"
          label="Secondary Phone Number"
          type="text"
          autoComplete="cEnter Phone Number"
          onChange={formik.handleChange}
          value={formik.values.secondaryPhone}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.secondaryPhone  && formik.errors.secondaryPhone ? (
            <div>{formik.errors.secondaryPhone}</div>
          ) : null}
          error = {formik.touched.secondaryPhone && formik.errors.secondaryPhone }
        />
    
    <Grid container justify="flex-end" >

<Button onClick={handleClose} color="primary">
Cancel
</Button>
<Button type = 'submit' color="primary">
Save
</Button>
</Grid>
    </form>
    
     
</DialogContent> </Box>

<DialogActions>

</DialogActions>
</Dialog>
</div>
   );
 };
 export default  EditPhoneNumber 