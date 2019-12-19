var mongoose= require('mongoose');
const  express  = require('express');
const bodyParser = require('body-parser');

const hotelsController= require('./controller/hotels.controller')
const restrauntsController= require('./controller/restaurants.controller')
var port = 3000;
var app = express();
//.................... DbConfig...........
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/trippy_basics', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err !== null) {
        console.log('connection errore ', err)
    } else {
        console.log("db connected")
    }
});

// ................. middleware..........................
app.use('/',hotelsController);
app.use('/',restrauntsController);

app.listen(port ,function(req,res){
    console.log('server started on port'+port)

});
