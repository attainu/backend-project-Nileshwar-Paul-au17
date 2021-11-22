import Productsdata from '../model/productschema.js';
export const getProducts = async (request ,response) => {
    try{
       const product1 =await Productsdata.find({})
       response.json(product1)
    }
    catch(error){
        console.log('Error :',error.message);
    }
 }