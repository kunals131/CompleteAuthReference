require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('logger');
const corsOptions = require('./config/cors.config');
const app = express();

//Setup Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Custom Middlewares


//Routes
app.get('/', (req,res)=>{
    res.send(res.send("HELLO WORLD!"))
})



//App on server 
const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

