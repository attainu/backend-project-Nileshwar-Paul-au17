import {AppBar , Toolbar , makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

import SearchBar from './searchbar'
import HeaderButtons from './custombuttons'

const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 60,
        position:'fixed'
    },
    component: {
        marginLeft:'10%',
        textDecoration: 'none',
        color: 'white'
    }
}));

const Header = () => {

    const classes = useStyle()
    
    return(
        <AppBar className={classes.header}>
            <Toolbar>
                <Link to='/' className={classes.component}>
                <h2>eCommerce</h2> 
                </Link>
                <SearchBar />
                <HeaderButtons />
        
            </Toolbar>
          
        </AppBar>
    )
}

export default Header;

