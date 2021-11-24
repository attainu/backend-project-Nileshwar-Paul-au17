import { useState, useEffect } from 'react';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/action/productAction';
export const DetailView = () =>{

    const product = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getProductDetails());
    },[dispatch]);
    return(
        <div>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
         </div>
    )
       
        
}