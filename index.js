var mongoose= require('mongoose');
const  express  = require('express');
const bodyParser = require('body-parser');
const hotelModel = require('./models/hotel');
var port = 3000;
var app = express();

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

app.post('/hotels',function(req,res){
    console.log('req.body',req.body)
    var {name,stars,priceCategory,city,country,address} = req.body;

    var hotel = new hotelModel   ({
        name: name,
        stars: stars,
        priceCategory: priceCategory,
        city: city,
        country:country,
        address:address
    });
    hotel.save(function(err,result){
        console.log('err',err),

        console.log('result',result)
        res.send(result)
    });
    
});

app.get('/hotels',function(req,res){
    console.log('GET/hotels');
    console.log('hotelModel',hotelModel);

    hotelModel.find({},function(err,result){
        console.log('err', err);
        console.log('result', result);
        if (err !== null) {
            console.log('Cannot get result err', err)
        } else {
            console.log('result fetched successfully');
        }
        res.json(  result );
    });

})


app.get('/hotels/:id',function(req,res){
    console.log('GET/hotels');
    var id = req.params.id
    console.log('hotelModel',hotelModel);
    hotelModel.findById({ _id: req.params.id},function(err,result){
        console.log('err', err);
        console.log('result', result);
        if (err !== null) {
            console.log('Cannot get result err', err)
        } else {
            console.log('result fetched successfully');
        }
        res.json(  result );
    });

})
app.put('/hotels/:id', function(req, res) {
    var city = req.query.city;
    
       
    hotelModel.updateOne({ _id: req.params.id }, { city: city }, function(
    err,
    result
    ) {
    console.log("update result", result); // returns an object of what has been updated
    res.json({
    data: {
        isUpdate: true,
        result:"city modify"
    }
    });
    });
});
app.delete("/hotels/:id", function(req, res) {
    hotelModel.deleteOne({ _id: req.params.id }, function(err, result) {
        console.log("delete result", result); // returns an object of what has been deleted
        res.json({
        success: true,
        data: {
            isDeleted: true,
            message:"your hotel is deleted succefully"
        }
        });
    });
});
app.listen(port ,function(req,res){
    console.log('server started on port'+port)

});
