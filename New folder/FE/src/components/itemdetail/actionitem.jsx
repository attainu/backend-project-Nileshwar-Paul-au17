import {Box,Typography,makeStyles,Link,Button} from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
const useStyle =makeStyles({
    button:{
        height:50,
        width:'46%',
        padding:'10px',
        marginTop:10
    },
    addtocart:{
        backgroundColor:'#ff9f00',
    },
    buynow:{
        backgroundColor:'#fb641b',
        marginLeft:10
    }
})
const ActionItems = ({product}) => {
        const classes = useStyle() 
    return(
        <>  
            <img src={product && product.url} style={{width:300,height:300}} />
            <Typography style={{fontSize:20,fontWeight:'bold'}}>{product && product.title?.shortTitle}</Typography>
            <Button  variant="contained" className={clsx(classes.button,classes.addtocart)}><Cart /> Add to Cart</Button>
            
            <Button variant="contained" className={clsx(classes.button,classes.buynow)}><Flash/> Buy Now</Button>
        </>

       
    )
}

export default ActionItems;