import { useState, useEffect } from 'react';
import {Search} from '@material-ui/icons';
import { makeStyles, InputBase, List, ListItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/action/productAction';
import { Link } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'

  },
  searchIcon: {
    marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%'
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%',
  },
}));

const SearchBar = () => {

  const  classes = useStyle()

return(
    <div className={classes.search}>
           
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <div className={classes.searchIcon}>
              <Search />

            </div>
    
          </div>
         
)

}
export default  SearchBar;