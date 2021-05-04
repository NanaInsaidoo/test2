import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';




export default function MenuListAdmin() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={null}>
      <Typography color="white" variant="title">
                    <Link href="/" style={{paddingLeft: 13, textDecoration: 'none', color:'white'}}>
                         Home </Link>
               </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={null}>
      <Typography color="white" variant="title">
                    <Link href="adminSchools" 
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}}> 
                     Schools
                      </Link>
               </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={null}>
      <Typography color="white" variant="title">
                    <Link href="admin" style={{paddingLeft: 13, textDecoration: 'none', color:'white'}}> 
                      Account Managers </Link>
               </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={null}>
      <Typography color="white" variant="title">
                    <Link href="contacUs" style={{paddingLeft: 13, textDecoration: 'none', color:'white'}}> 
                      Contact Us</Link>
               </Typography>
      </Button> */}
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    
  );
}
