import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';


export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();

  console.log("form values", formValues)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
     
      <Grid container spacing={2}>
        
       {formValues.nameOfSchool}
    
      </Grid>
    </React.Fragment>
  );
}