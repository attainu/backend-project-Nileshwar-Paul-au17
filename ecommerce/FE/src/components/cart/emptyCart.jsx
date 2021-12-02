import { useNavigate } from "react-router-dom"
import {Box,makeStyles,Typography,Button} from '@material-ui/core';

const useStyle = makeStyles({
    component:{
        width: '80%%',
        height: '75vh',
        background: '#fff',
        margin: '80px 140px'
    },
    img:{
        width:'300px',
        height:'300px'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70
    },
    btn:{
        background: '#2874f0',
        color: 'white',
    },
    btncomponent:{
        display:'flex',
        justifyContent: 'center',
        marginTop:10
    }
})

const EmptyCart =() => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle()
    const history = useNavigate()
    const addItem = () => {
        history('/')
    }
    return(
        <Box className={classes.component}>
        <Box className={classes.container}>
            <img src={imgurl} className={classes.img} />
            <Typography>Your cart is empty!</Typography>
            <span>Add items to it now.</span>
            <Box className={classes.btncomponent}>
            <Button className={classes.btn} onClick={() => addItem()}>Shop Now</Button>
            </Box>
        </Box>
    </Box>
    )
}
export default EmptyCart;