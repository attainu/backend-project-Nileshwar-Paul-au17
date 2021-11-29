import { Card, makeStyles, Box, Typography ,Button} from '@material-ui/core';
import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop:'1px'
    },
    leftComponent: {
        margin: '20px'
    },
    rightComponent: {
        marginTop: '20px',
        marginLeft:'20px'
    },
    logo:{
        width:'70px'
    },
    smallText:{
        fontSize:'14'
    },
    greyText:{
        color:'#878787'
    },
    img:{
        width:'100px',
        height:'100px',
    
    },
    btn:{
        color:'Blue',
        padding:'10px',
        margin:'20px'
    }
})
const CartItems = ({ items,removeItemFromCart }) => {
    const classes = useStyle()
    // console.log(items.product.id)
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={items && items.product?.url} className={classes.img}></img>
            </Box>

            <Box className={classes.rightComponent}>
               
                <Typography> {items && items.product.title?.longTitle}</Typography>
                <Typography className={clsx(classes.greyText,classes.smallText)}>Seller:CloudTailIndia</Typography>
                <span><img className={classes.logo} src={fassured}></img></span>
                
                <Typography style={{fontSize:18,fontWeight: 'bold'}}>
                    <span className={classes.greyText}> <strike>₹{items && items.product.price?.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span>₹{items && items.product.price?.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:'green'}}>{items && items.product.price?.discount} Off</span>
                  
                    <Button className={classes.btn} onClick={() => removeItemFromCart(items.product.id)}>Remove</Button>
                </Typography> 
                

            </Box>
        </Card>
    )
}
export default CartItems;