import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MainSchoolForm from '../MainSchoolForm'
import AccountCircle from '@material-ui/icons/AccountCircle';

import AdminProfile from './AdminProfile'
import { Box, Typography } from '@material-ui/core';

 function UserSettings(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      {props.name === 'sam'?
  <p >
   
    <Box display="flex" m= {1} my={-4} onClick={handleClickOpen} >
       <Box><AccountCircle  color="white" /></Box>
       <Box m={0} fontSize={18} ml={1}>Profile</Box>
       </Box>
    </p> :
   <p><AccountCircle  color="white" onClick={handleClickOpen}/></p>

      }

      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Profile Settings</DialogTitle>
        <DialogContent>
          <AdminProfile/>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      
    </div>
  );
}
export default UserSettings