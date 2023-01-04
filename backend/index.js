const dotenv = require('dotenv');
const express = require('express');
const dbConnect = require("./dbConnect");
const blogRoutes = require("./routes/blog")
const cors = require("cors");


dotenv.config();
dbConnect();
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use("/api",blogRoutes)


app.listen( process.env.PORT || 8080,() =>{ 
    console.log('Server Started On Port 8080') 
});