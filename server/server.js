require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('logger');
const corsOptions = require('./config/cors.config');
const credentials = require('./middlewares/credentials');
const app = express();
const connectDB  = require('./config/db.connection');
const { default: mongoose } = require('mongoose');
const cookie_parser = require('cookie-parser');
connectDB();

//Setup Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(credentials);

//Custom Middlewares


//Routes
app.get('/', (req,res)=>{
    res.send(res.send("HELLO WORLD!"))
})
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));
app.use('/api/refreshtoken', require('./routes/refreshToken'));
app.use('/api/logout', require('./routes/logout'));
app.use('/api/data', require('./routes/userdata'));

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
