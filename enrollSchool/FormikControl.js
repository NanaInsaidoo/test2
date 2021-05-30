import React from 'react'
import Input from './Input'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
// import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'
import Textarea from './Textarea'
import DatePicker from './Admin/DatePicker'
import ImageUpload from './UploadID'
 import UploadPicture from './UploadPicture'
 import UploadID from './UploadID'
import UploadResume from './UploadResume'




function FormikControl(props) {
const {control, ...rest} = props
switch(control){
    case 'input':
        return <Input  {...rest}   />
      case 'textarea':
        return <Textarea {...rest} />
      case 'select':
        return <Select {...rest} />
      case 'radio':
        return <RadioButtons {...rest} />
      case 'checkbox':
        return <CheckboxGroup {...rest} />
      case 'date':
        return <DatePicker {...rest} />
      // case 'chakraInput':
      //   return <ChakraInput {...rest} />

      case 'picture':
        return <UploadPicture {...rest} />

      case 'id':
        return <UploadID {...rest} />
       
     case 'resume':
            return <UploadResume {...rest} />

      default:
        return null
    }
  }



export default FormikControl;
