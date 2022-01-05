import express from "express";
import Shop from "../models/Shop";
const shopList = express.Router();


const shops: Shop[] = [
    {id: 111, name: "Pepper's Pizza", rating: 4.5},
    {id: 222, name: "Clive's Chives", rating: 3.4},
    {id: 333, name: "Bretty's Brews", rating: 4.3},
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];
shopList.get("/", function(req,res){
    let minRating: number = parseInt(req.query.minRating as string);
    
    res.render('shop-list',{shops });
})

export default shopList;