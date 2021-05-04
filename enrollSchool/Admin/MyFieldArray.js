import { Box, Button, Grid } from '@material-ui/core';
import { ErrorMessage, FieldArray } from 'formik';
import React from 'react'
import FormikControl from '../FormikControl';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  
      // background: "purple",
    // width:"10%"

  },
  maincontainer: {
  }
}))
function MyFieldArray(props) {
  const classes = useStyles();


    return (
        <div>
              <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                    >

              
                <FieldArray
                  name="levels"
                  render={arrayHelpers => {
                    // console.log("values",arrayHelpers.form.values.users)
                    const levels = arrayHelpers.form.values.levels;
                    return (
                      <div >
                        {levels && levels.length > 0
                          ? levels.map((level, index) => (
                            <div key={index}>
                              {/* <Field
                              placeholder="user name"
                              name={`users.${index}.name`}
                            />
                            <ErrorMessage name={`users.${index}.name`} /> */}
                           <Grid
                              container
                              direction="row"
                      
                            >

                              <Grid lg={6}>
                            <FormikControl control="input" name={`levels.${index}.classLevelsName`} label="Class Name" id={`levels.${index}.classLevelsName`} />
                            {/* <ErrorMessage name={`users.${index}.classlevelName`} />  */}
                              </Grid>

                              <Grid lg={6}>
                            <FormikControl control="input" name={`levels.${index}.classLevelsQuantity`} label="Class Quantity" id={`levels.${index}.classLevelsQuantity`} />
                            {/* <ErrorMessage name={`users.${index}.classLevelQuantity`} />  */}
                              </Grid>


                              </Grid>
                              <br />
  
                              {/* <Field
                              placeholder="user quantity"
                              name={`users.${index}.quantity`}
                            />
                            <ErrorMessage name={`users.${index}.quantity`} /> */}
  
                              <br />
  
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                            </button>
                              <br />
                              <br />
                            </div>
                          ))
                          : null}
                           {/* <Button size="large"   variant="outlined" color="primary">Add Another Class</Button> */}
                        <Button
                        size="large"   variant="outlined" color="primary"
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              classLevelsName: "",
                              classLevelsQuantity: ""
                            })
                          } // insert an empty string at a position
                        >
                          add a User
                    </Button>
                        <br />
                        <br />
                        <br />

                        {/* <Grid  className={classes.buttons}>
                            <Button size="large"    variant="outlined" color="primary"
                             onClick= {props.previous}
                            >Back </Button>
                        </Grid>

                        <Grid  className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                //  onClick= {props.next}
                                        >
                                            NEXT 
                                </Button>
                        </Grid> */}
                        {/* <div>
                      <button type="submit">Form Submit FIELD</button>
                    </div> */}
                      </div>
                    );
                  }
                  }

                  
                />
                </Grid>
         
              
        </div>
    )
}

export default MyFieldArray