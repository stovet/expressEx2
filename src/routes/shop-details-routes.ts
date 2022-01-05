import express from 'express';
import Shop from '../models/Shop';
const shopDetails = express.Router();


const shops: Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5 },
    { id: 222, name: "Clive's Chives", rating: 3.4 },
    { id: 333, name: "Bretty's Brews", rating: 4.3 },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];

// shopDetails.get("/", function(req,res){
//     res.render('shop-details', {shops})
   
// });
shopDetails.get("/:id", function(req, res){
    let id: number = parseInt(req.params.id);
    let errorRes: string = `No shop exists with ID ${id} `;
    for(let i = 0; i < shops.length; i++){
        if(shops[i].id === id){
            let shop: Shop = shops[i];
           res.render('shop-details', {shop});
         }
        //  if(shops[i].id !== id){
        //      res.render('shop-details', {errorRes})
        //  }
    }
});

export default shopDetails;