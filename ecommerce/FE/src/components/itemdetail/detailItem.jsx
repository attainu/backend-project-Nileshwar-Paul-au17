import { useState, useEffect } from 'react';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/action/productAction';
import { useParams } from 'react-router-dom'
export const DetailView = () =>{

    const product = useSelector(state => state.getProductDetailsReducer.product);
    console.log(`🚀 ~ DetailView ~ product`, product)
    const dispatch = useDispatch()

    const {id} = useParams()
    useEffect(() =>{
        dispatch(getProductDetails(id));
    },[dispatch]);
    return(
        <div style={{padding: 100}}>
            {product && product.description}
         </div>
    )
       
        
}