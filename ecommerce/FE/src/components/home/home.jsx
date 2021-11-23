
import {Divider,Box} from '@material-ui/core'
import Banner from './banner';
import Slide from './slide';
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {products }from "../../constants/data.js";
import  listProducts  from '../../redux/action/productAction.js';
const Home = () => {

    const getProducts = useSelector(state => state.getProducts)
    const { products} = getProducts;
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(listProducts())
    } ,[dispatch])
    
    return(
        <Box>
            <Divider/>
            <Banner />
            <Divider/>
            <Slide
            products={products}
            />
        </Box>  
    )
}
export default Home;