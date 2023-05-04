const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routers/routes');


// initialize app
const app = express();

// configure dotenv
dotenv.config();

// configure cors
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
}));

// configure express to use json
app.use(express.json());

// configure express to use urlencoded
app.use(express.urlencoded({ extended: true }));

// configure express to use static files
app.use(express.static('public'));

// configure express to use routes
// app.use(require('./routes'));
app.use('/api',router)

app.get('/', (req, res) => {
    res.send('Welcome to my chef-recipe-hunter-server');
});




// configure express to use error handler
app.use((err, req, res, next) => {

    // log the error
    console.log(err);

    // send the error
    res.status(500).json({
        message: 'Internal Server Error',
    });
});


// listen to port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});