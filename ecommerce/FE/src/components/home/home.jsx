import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {makeStyles,Box} from '@material-ui/core'
import Banner from './banner';
import Slide from './slide';
const Home = () => {
    return(
        <Box>
         <Banner />
        <Slide/>
    
        <Slide/>
        </Box>

       
    )
   
}
export default Home;