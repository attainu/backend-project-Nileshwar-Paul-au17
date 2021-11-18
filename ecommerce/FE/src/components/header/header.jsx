import {AppBar , Toolbar , makeStyles,Box} from '@material-ui/core'

import SearchBar from './searchbar'
import HeaderButtons from './custombuttons'

const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 60,
        

    },
    component: {
        marginLeft:'10%'
    }
}));

const Header = () => {

    const classes = useStyle()
    
    return(
        <AppBar className={classes.header}>
            <Toolbar>
                <Box className={classes.component}>
                <h3>E-Commerce</h3> 
                </Box>
                <SearchBar />
                <HeaderButtons />
        
            </Toolbar>
          
        </AppBar>
    )
}

export default Header;

