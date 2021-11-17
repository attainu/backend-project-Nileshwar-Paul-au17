import {AppBar , Toolbar , makeStyles} from '@material-ui/core'

import SearchBar from './searchbar'

const useStyle = makeStyles(theme => ({
    header: {
        background: '#99ccff',
        height: 60,
        display: 'flex'
    }
}));

const Header = () => {

    const classes = useStyle()

    return(
        <AppBar className={classes.header}>
            <Toolbar>
              <h3> E-Commerce </h3>
            </Toolbar>
           
            <SearchBar />
        
        </AppBar>
    )
}

export default Header;

