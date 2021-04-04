import { Button } from '@material-ui/core';
import { FieldArray } from 'formik';
import React from 'react'
import FormikControl from '../FormikControl';

function MyFieldArray() {
    return (
        <div>
              
              <FieldArray
                  name="users"
                  render={arrayHelpers => {
                    // console.log("values",arrayHelpers.form.values.users)
                    const users = arrayHelpers.form.values.users;
                    return (
                      <div >
                        {users && users.length > 0
                          ? users.map((user, index) => (
                            <div key={index}>
                              {/* <Field
                              placeholder="user name"
                              name={`users.${index}.name`}
                            />
                            <ErrorMessage name={`users.${index}.name`} /> */}
                              <FormikControl control="input" name={`users.${index}.name`} label="Name of School" id={`users.${index}.name`} />
                              <br />
  
                              {/* <Field
                              placeholder="user email"
                              name={`users.${index}.email`}
                            />
                            <ErrorMessage name={`users.${index}.email`} /> */}
                              <FormikControl control="input" name={`users.${index}.email`} label="email of School" id={`users.${index}.email`} />
  
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
                              name: "",
                              email: ""
                            })
                          } // insert an empty string at a position
                        >
                          add a User
                    </Button>
                        <br />
                        <br />
                        <br />
                        {/* <div>
                      <button type="submit">Form Submit FIELD</button>
                    </div> */}
                      </div>
                    );
                  }
                  }
                />
        </div>
    )
}

export default MyFieldArray
