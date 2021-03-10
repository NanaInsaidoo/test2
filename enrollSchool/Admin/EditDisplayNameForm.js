import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


import { Formik, Form } from "formik";
import * as yup from "yup";


let SignupSchema = yup.object().shape({
  
  displayName: yup
    .string()
   
    .required("display name is required or CANCEL")
});

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding:-5,
    margin:-5
    

  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing()
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

 const EditDisplayNameForm = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
      <Grid>

      {/* <img src={Logo} alt='' /> */}

      </Grid>
       
        <Formik
          initialValues={{
            displayName: ""
                    }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item >

                 
                  <TextField
                    error={errors.firstName && touched.firstName}
                    autoComplete="displayName"
                    name="displayName"
                    fullWidth
                    onChange={handleChange}
                    id="displayName"
                    label="display Name"
                    autoFocus
                    helperText={
                      errors.displayName && touched.displayName
                        ? <Box color='red'>{errors.displayName}</Box>
                        : null
                    }
                    
                  />
                </Grid>
                </Grid>
                <Grid container justify="flex-end" >

                <Button onClick={null} color="primary">
            Cancel
          </Button>
          <Button type = 'submit' onClick={(e)=>null} color="primary">
            Save
          </Button>
                </Grid>
            </Form>
          )}
        </Formik>
      </div>
       

    </Container>
    
  );
};
export default EditDisplayNameForm