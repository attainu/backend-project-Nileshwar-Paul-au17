import  {Box , Button , makeStyles , Typography ,Badge} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons';
import React ,{useState} from 'react';

import LoginDialog from '../login/login.jsx';
const useStyle = makeStyles({
    login:{
        backgroundColor: '#ffffff',
        color:'#2874f0',
        texttransform: 'none',
        fontweight:600,
        borderRadius: 2,
        width:'40px',
        height:'30px'
    },
    wrapper:{
        margin:'0 5% 0 auto',
        color:'#ffffff',
        display: 'flex',
        alignItems: 'center',
        '& > *':{       //applying css to child elements
            marginRight:50
        }
    },
    container:{
        display:'flex',
        textDecoration:'none',
        color:'#ffffff'
    }
})
const HeaderButtons = () => {
    const [open , setOpen] = useState(false)
    const openLoginDialog = () => {
       setOpen(true);
    }
    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            <Button className={classes.login} onClick={ ()=>openLoginDialog() }>Login</Button>
            <Typography>More</Typography>
            
            <Link to='/cart' className={classes.container}>
            <Badge badgeContent={4} color="primary">
                <ShoppingCart/> 
            </Badge>
            <Typography style={{marginLeft:10}} >Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} >

            </LoginDialog>

        </Box>
    )
}
export default HeaderButtons;