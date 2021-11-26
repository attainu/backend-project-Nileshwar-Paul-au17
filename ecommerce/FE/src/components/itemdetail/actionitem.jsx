import {BOx,Typography,makeStyles,Link} from '@material-ui/core';

const ActionItems = ({products}) => {

    return(
        <>
            <img src={products && products?.detailUrl} style={{width:300,height:300}} />
        </>
    )
}

export default ActionItems;