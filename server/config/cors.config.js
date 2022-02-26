const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:3000'
]
const corsOptions = {
    origin : (origin,callback)=>{
        if (allowedOrigins.indexOf(origin)!=-1 || !origin) {
            callback(null,true);
        }
        else {
            callback(new Error('Not Allowed by CORS'));
        }
    },
    optionsSuccessStatus : 200
}

module.exports = corsOptions;