
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {makeStyles,Typography,Box} from '@material-ui/core'
import {products }from "../../constants/data.js";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const useStyle = makeStyles({
    image:{
        height:100,
        width:100,
        marginTop:10,
        marginBottom:10
    },
    text:{
    
        marginTop:10,
        fontWeight: 'bold',
       
    }
})
const Slide = () =>{
    const classes =useStyle()
    return(
        <Carousel responsive={responsive} infinite={true}
                focusOnSelect={true} centerMode={true} autoPlay={false}
        >
            {
                                products.map(product => (
                                    <Box textalign={"center"}>
                                        <img src={product.url} className={classes.image}/>
                                          <Typography className={classes.text} >{product.title.shortTitle}</Typography>
                                        <Typography className={classes.text} style={{color:"green"}}>{product.discount}</Typography>
                                        <Typography className={classes.text}>{product.tagline}</Typography>
                                    
                                    </Box>
                                  
                                ))
            }
        </Carousel>
    )
}
export default Slide;