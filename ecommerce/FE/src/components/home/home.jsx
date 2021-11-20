
import {Divider,Box} from '@material-ui/core'
import Banner from './banner';
import Slide from './slide';
const Home = () => {
    return(
        <Box>
            <Divider/>
            <Banner />
            <Divider/>
            <Slide/>
        </Box>

       
    )
   
}
export default Home;