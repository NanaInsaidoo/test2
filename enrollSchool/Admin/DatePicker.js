import React from 'react'
import DateView from 'react-datepicker'
import { ErrorMessage, Field } from 'formik'
import TextError from '../TextError'
import 'react-datepicker/dist/react-datepicker.css'
import { Box } from '@material-ui/core'
import { deepPurple, red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(4),
      // background: "purple",

  },



  label: {
      display: "block",
      padding: "23px"
  },

  inputbox: {
      // display: "block",
      width: "70%",
      height: "12px",
      padding: "15px",
      // line-height: "1.42857143",
      // color:" #555",
      // background-color: "#fff",
      // background-image:" none",
      // border: 1px solid "#ccc",
      borderRadius: "5px",
      border: `1px solid ${deepPurple[500]}`,
  },

  buttons: {
      margin: theme.spacing(2),
  }


}));


function DatePicker (props) {
  const classes = useStyles();
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
        <Box mt={1}>
      <label htmlFor={name}>{label}</label>
      </Box>
      <Field name={name} className = {classes.inputbox} >
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            
            <Box mt={1}>
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
            </Box>
          )
        }}
      </Field>
      <div style= {{color:"red"}}>
      <ErrorMessage component={TextError} name={name}/>
      </div>
    </div>
  )
}

export default DatePicker 