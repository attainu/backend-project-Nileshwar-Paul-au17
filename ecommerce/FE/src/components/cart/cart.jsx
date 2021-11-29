
import {useEffect} from 'react';
import {makeStyles,Box,Typography} from '@material-ui/core';
import {removeFromCart} from '../../redux/action/cartActions';
import {useDispatch, useSelector} from 'react-redux';

import CartItems from './cartitems';

const useStyle = makeStyles({
    component:{
        marginTop:60,
        padding:'30px 135px'
    },
    leftComponent:{

    },
    rightComponent:{

    },
    header:{
        padding:'15px ,24px',
        background:'#fff'
    }

})
const Cart = () =>{
    const classes = useStyle()
    
  
    const {cartItems,} = useSelector(state => state.cart)

    useEffect(() => {
        console.log(cartItems)
    })
    const dispatch =useDispatch()
    const removeItemFromCart =(id)=>{
        dispatch(removeFromCart(id))

    };
    return(
        <>
           {   
           cartItems.length?
           <Box className={classes.component}>
             
                <Box className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight:600,fontSize:18}}>
                            My cart ({cartItems.length})
                        </Typography>
                      
                    </Box>
                    {
                        cartItems.map(items => (
                            <CartItems items={items}  removeItemFromCart={removeItemFromCart} ></CartItems>
                        ))
                    }
                </Box>
                <Box className={classes.rightComponent}>
                </Box>
           </Box>
           :
           <p>Empty Cart</p>
           }
        </>
    )
}
export default Cart;