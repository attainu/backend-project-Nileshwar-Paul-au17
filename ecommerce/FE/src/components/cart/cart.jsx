import { useEffect } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { removeFromCart, removefromcart } from '../../redux/action/cartActions';

import CartItems from './cartitems';
import EmptyCart from './emptyCart';
import TotalView from './totalView';
import { LoginContext } from '../../context/contextProvider';

const useStyle = makeStyles({
    component: {
        marginTop: 60,
        padding: '30px 135px',
        display: 'flex'
    },
    leftComponent: {
        width: '70%'
    },
    header: {
        padding: '15px ,24px',
        background: '#fff'
    },
    placeorder: {
        background: '#fb641b',
        borderRadius: '2px',
        width: '250px',
        height: '50px',
        display: 'flex',
        marginLeft: 'auto'
    },
    bottom: {
        background: '#fff',
        borderTop: '1px soid black',
        boxShadow: '0 2px 10px rgb(0 0 0 /10%)',
        marginTop: '5px'
    }
})

const Cart = () => {
    const path = useNavigate()
    const user = useContext(LoginContext);
    //console.log(user.account)

    const orderplaced = () => {
        if (user.account === '') {
            alert("login plz")
        }
        else {
            alert("order placed")
            dispatch(removefromcart(cartItems))
            path('/')
        }
    }
    const classes = useStyle()
    let { cartItems, } = useSelector(state => state.cart)
    useEffect(() => {
        //console.log(cartItems)
    })
    const dispatch = useDispatch()
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    };

    return (
        <>
            {
                cartItems.length?
                    <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                                    My cart ({cartItems.length})
                                </Typography>
                            </Box>
                            {
                                cartItems.map(items => (
                                    <CartItems items={items} removeItemFromCart={removeItemFromCart} ></CartItems>
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button className={classes.placeorder} variant="contained" onClick={() => orderplaced()}>Place Order</Button>
                            </Box>
                        </Box>
                        <TotalView cartItems={cartItems} />
                    </Box>
                    :
                    <>
                        <EmptyCart />
                    </>
            }
        </>
    )
}

export default Cart;