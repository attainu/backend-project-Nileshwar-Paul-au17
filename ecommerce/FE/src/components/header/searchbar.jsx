import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { makeStyles, InputBase, List, ListItem } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { getProducts as listProducts } from '../../redux/action/productAction';

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
  list: {
    position: 'absolute',
    color: '#000',
    background: '#FFFFFF',
    marginTop: 36
  } 
}));

const SearchBar = () => {

  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState()

  const dispatch = useDispatch()
  const getProducts = useSelector(state => state.getProducts)
  const { products } = getProducts;
  //console.log(products)
 
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const getText = (text) => {
    setText(text)
  }

  return (
    <div className={classes.search}>

      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => getText(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
      {
        text &&
        <List className={classes.list} hidden={open}>
          {
            products && products.filter(product => product.title?.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem> 
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={() => setOpen(true)} >
                  {product.title?.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </List>
      }
    </div>
  )
}
export default SearchBar;