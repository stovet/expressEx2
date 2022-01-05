import express from "express";
import path from "path";
import shopRoutes from "../src/routes/shop-routes"
import shopList from "../src/routes/shop-list-routes"
import routes from "./routes/app-routes";
import shopDetails from "./routes/shop-details-routes";

const app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", routes);
app.use("/shop-list", shopList);
app.use("/shop-details", shopDetails);

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});

