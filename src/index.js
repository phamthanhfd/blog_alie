const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
  
                   app.engine('.hbs', exphbs({ extname: '.hbs' }));

//Routes init
route(app);

app.listen(port, () => {
           
    
                            console.log('Example app listening at http://localhost:${port}'); //127.0.0.1 - localhost
});

// Ctrl + C to turn off server localhost
