import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditDisplayNameForm from "./EditDisplayNameForm"
import { Box } from '@material-ui/core';
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikControl'
import Grid from '@material-ui/core/Grid';
import { Field, ErrorMessage } from 'formik'



export default function EditName() {
  const [open, setOpen] = React.useState(false);



  const initialValues = {

    nameOfSchool: "",

  }

  const validationSchema = Yup.object({
    nameOfSchool: Yup.string().required('required'),

  })

  function onSubmit(values) {
    console.log('Form data', values)
    setOpen(false);
  }


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
            Your display name is used to represent you.
            It's visible to other users and can be changed any time.
          </DialogContentText>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form>
                  {/* <FormikControl control="input" name="nameOfSchool" label="Name of School" id="nameOfSchool" /> */}
            
                  <TextField
          error
           required
           helperText="Incorrect entry."
            autoFocus
            margin="dense"
             id="nameOfSchool"
            label="Name of School"
            type="text"
            name="nameOfSchool" 
            fullWidth
          />

                  <Grid container justify="flex-end" >

                    <Button onClick={handleClose} color="primary">
                      Cancel
</Button>
                    <Button type='submit' color="primary">
                      Save
</Button>
                  </Grid>
                </Form>
              )
            }}
          </Formik>



        </DialogContent> </Box>

        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}
