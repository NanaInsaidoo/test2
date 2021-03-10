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
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';


const useStyles = makeStyles((theme) => ({
    
    grow: {
      flexGrow: 1,
      float:"center"
    },
  }));

export default function EditName() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  let loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const { register, handleSubmit, errors} = useForm({
    validationSchema: loginSchema
  });

  const onSubmit = (values) => {
    console.log(values);
  }

  // function onSubmit(values) {
  //   console.log('Form data', values)
  //   setOpen(false);
  // }


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

          return (
            <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
                <TextField
                  name="email"
                  inputRef={register}
                  label="Enter email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />

                <TextField
                  name="password"
                  type="password"
                  inputRef={register}
                  label="Enter password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />

                <Button className={classes.button} type="submit" variant="outlined" aria-label="delete" color="primary" >
                  Continue
                </Button>
              </form>

        </DialogContent> </Box>

        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}
