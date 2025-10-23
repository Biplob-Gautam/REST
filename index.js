const express = require("express");
const path = require("path");
const app = express();
let port = 8010;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.listen(port , ()=>{
    console.log("App is listening");
});