import express from 'express';

const routes = express.Router();

routes.get("/", function(req, res){
    // res.json("Home");
    //res.render('home'); // displays the template
    res.render('home',
    {
      shops: [ { id: 111, name: "Pepper's Pizza", rating: 4.5 },
        { id: 222, name: "Clive's Chives", rating: 3.4 },
        { id: 333, name: "Bretty's Brews", rating: 4.3 },
        { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
        { id: 555, name: "Teddy's Tunes", rating: 4.7 } ]
    }); // displays the template with data
});

routes.get("/node", function(req, res){
    res.json("Node");
});

export default routes;