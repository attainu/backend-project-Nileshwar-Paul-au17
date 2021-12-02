import {Divider,Box} from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react'
import Banner from './banner';
import Slide from './slide';
import  {getProducts as listProducts}  from '../../redux/action/productAction.js';

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
            <Slide products={products}/>
            <Box style={{padding:10,fontWeight:'bolder',fontSize:25}}>Deal of the Day:</Box>
            <Slide style={{marginTop:25}} products={products}/>
            <Box style={{padding:10,fontWeight:'bolder',fontSize:25}}>Best Sellers:</Box>
            <Slide style={{marginTop:25}} products={products}/>
            <Divider/>
            <Box style={{ background: '#2874f0',
            height: 60,
            width:'100%',
            position:'bottom 0',
            textAlign: 'center'
            }}>
                All Rights Reserved 
            </Box>
        </Box>  
    )
}
export default Home;