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

const EditPassword = () => {
  const [open, setOpen] = React.useState(false);


   const formik = useFormik({
     initialValues: {
       password: '',
       newPassword:'',
       confirmPassword:''
     },

     validationSchema: Yup.object().shape({
      password: Yup.string().required('Password is required'),
      newPassword:  Yup.string().min(5,"password must be more than 4 characters").required("Password is required"),
      

      confirmPassword: Yup.string().min(5,"password must be more than 4 characters").required("Password is required")
      .oneOf([Yup.ref('newPassword'), null], 'New Passwords must match'),
   
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

          <DialogTitle id="form-dialog-title">Change display name</DialogTitle>
          <Box display='flex'><DialogContent>
            <DialogContentText>
              Your password is private. Do not share it.
            </DialogContentText>
     <form onSubmit={formik.handleSubmit}>
       <TextField
          id="password"
          label="Enter Old Password"
          type="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          error = {formik.touched.password && formik.errors.password }
        />
         <TextField
          id="newPassword"
          label="Enter New Password"
          type="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.newPassword}</div>
          ) : null}
          error = {formik.touched.newPassword && formik.errors.newPassword }
        />
         <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
          error = {formik.touched.confirmPassword && formik.errors.confirmPassword }
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
 export default  EditPassword 