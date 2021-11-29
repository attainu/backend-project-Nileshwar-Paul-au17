import {Box,Typography,makeStyles,Link,Button} from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/action/cartActions';
import { useNavigate } from "react-router-dom";
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
   
})
const ActionItems = ({product}) => {
        const classes = useStyle() 
        const  dispatch = useDispatch();
        const history = useNavigate();
        const additemsToCart = () =>{
            dispatch(addToCart(product.id));
            // console.log(product.id)
            history('/cart')
        }
    return(
        <>  
            <img src={product && product.detailUrl} style={{width:300,height:300}} />
            <Typography style={{fontSize:20,fontWeight:'bold'}}>{product && product.title?.shortTitle}</Typography>
           
            <Button onClick = {() => additemsToCart()} variant="contained" className={clsx(classes.button,classes.addtocart)}><Cart /> Add to Cart</Button>
            
           
        </>

       
    )
}

export default ActionItems;