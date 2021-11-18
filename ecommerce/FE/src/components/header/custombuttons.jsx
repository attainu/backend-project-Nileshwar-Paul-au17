import  {Box , Button , makeStyles , Typography ,Badge} from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons';

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
        '& > *':{
            marginRight:50
        }
    },
    container:{
        display:'flex'

    }
})
const HeaderButtons = () => {
    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            <Button className={classes.login}>Login</Button>
            <Typography>More</Typography>
            
            <Box className={classes.container}>
            <Badge badgeContent={4} color="primary">
                <ShoppingCart/> 
            </Badge>
            <Typography style={{marginLeft:10}} >Cart</Typography>
            </Box>

        </Box>
    )
}
export default HeaderButtons;