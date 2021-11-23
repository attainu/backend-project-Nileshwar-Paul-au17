import Productsdata from '../model/productschema.js';
export const getProducts = async (request ,response) => {
    try{
       const products =await Productsdata.find({})
       response.json(products)
    }
    catch(error){
        console.log('Error :',error.message);
    }
 }