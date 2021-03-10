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
import * as Yup from 'yup';
import Grid from "@material-ui/core/Grid";


const EditName = () => {
  const [open, setOpen] = React.useState(false);


   const formik = useFormik({
     initialValues: {
       email: '',
     },

     validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email e.g example@mail.com")
      .required('Required')
    
      }),

    

     onSubmit: (values,e) => {
  console.log("e",e) 
        alert(JSON.stringify(values, null, 2));
      setOpen(false);

     },
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
              Your Email name is used to communicate with you.
              It's visible to other users and can be changed any time.
            </DialogContentText>
     <form onSubmit={formik.handleSubmit}>
       <TextField
          id="email"
          label="Email"
          type="text"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.email}
          margin="normal"
          variant="outlined"
          fullWidth
          helperText=   {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          error = {formik.touched.email && formik.errors.email }
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
 export default  EditName 