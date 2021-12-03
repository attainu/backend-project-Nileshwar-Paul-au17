import Productsdata from '../model/productschema.js';
export const getProducts = async (request ,response) => { //this fun is  for fetching all products data
    try{
       const products =await Productsdata.find({})
       response.json(products)
    }
    catch(error){
        console.log('Error :',error.message);
    }
 }
 export const getProductsById = async (request , response) => { // this fun is for fetching a particular product by product id
    //console.log(request.params.id)
    try {
        const product_response = await Productsdata.findOne({'id':request.params.id})
        //console.log(product_response)
        response.json({product:product_response})
    }
    catch(error){
        console.log("Error: ",error.message);
    }
 }