import {Typography , Menu,MenuItem,makeStyles} from '@material-ui/core';
import React ,{useState} from 'react';

const useStyle =makeStyles({component:{
    marginTop:45
}})

const Profile =({account , setAccount}) => {
   
    const [open ,setOpen] = useState(false);
    const classes=useStyle()
    const handleClose =() =>{
       setOpen(false);
    }
    const logout =() =>{
        setAccount('');
     }
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
       
    }
    
    return(
        <>
        <Typography onClick={handleClick} >
        {account}
        </Typography>
        <Menu
         anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
       >
       
        <MenuItem onClick={()=>{handleClose(); logout();}} >Logout</MenuItem>
      </Menu>
        
        </>
    )
}

export default Profile;