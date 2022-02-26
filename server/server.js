require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('logger');
const corsOptions = require('./config/cors.config');
const app = express();
const connectDB  = require('./config/db.connection');
const { default: mongoose } = require('mongoose');

connectDB();

//Setup Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Custom Middlewares


//Routes
app.get('/', (req,res)=>{
    res.send(res.send("HELLO WORLD!"))
})
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));



app.all('*', (req,res)=>{
    res.status(404);
    res.json({
        message : "Route not Found!"
    })
})

//App on server 
const PORT = process.env.PORT || 3001;
mongoose.connection.once('open', ()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on http://localhost:${PORT}`);
    })    
})
