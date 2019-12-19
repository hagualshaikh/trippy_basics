const  express  = require('express');

var router = express.Router();
const hotelModel = require('../models/hotel');
const roomModel = require('../models/room');


router.post('/hotels',function(req,res){
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

router.get('/hotels',function(req,res){
    console.log('GET/hotels');
    console.log('hotelModel',hotelModel);

    console.log('req.query.limit',req.query.limit);
    var limit =parseInt(req.query.limit);
    
    hotelModel.find({}).limit(limit).exec(function(err,result){
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

router.get('/hotels/:id',function(req,res){
    console.log('GET/hotels');
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
router.put('/hotels/:id', function(req, res) {
    var city = req.query.city;
    
    hotelModel.updateOne({ _id: req.params.id }, { city: city }, function(
        err,
        result
    ) {
        console.log("update result", result); // returns an object of what has been updated
        res.json({
            success: true,
            data: {
                isUpdate: true,
                result:"city modify"
            }
        });
    });
});
router.delete("/hotels/:id", function(req, res) {
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


//...................route Restaurant............................................................
// router.post('/restaurants',function(req,res){
//     console.log('req.body',req.body)
//     var {name,stars,priceCategory,city,country,address,cuisine} = req.body;

//     var restaurant = new restaurantModel   ({
//         name: name,
//         stars: stars,
//         priceCategory: priceCategory,
//         city: city,
//         country:country,
//         address:address,
//         cuisine:cuisine
//     });
//     restaurant.save(function(err,restaurantDb){
//         console.log('err',err),
//         console.log('restaurantDb',restaurantDb)
       
//         res.send(restaurantDb)
//     });
    
// });
// router.get('/restaurants',function(req,res){
//     console.log('GET/restaurants');
//     console.log('restaurantModel',restaurantModel);
//     var limit =parseInt(req.query.limit);
//     restaurantModel.find({}).limit(limit).exec(function(err,restaurantDb){
//         console.log('err', err);
//         console.log('restaurantDb', restaurantDb);
//         if (err !== null) {
//             console.log('Cannot get result err', err)
//         } else {
//             console.log('result fetched successfully');
//         }
//         res.json(  restaurantDb );
//     });

// })
// router.get('/restaurants/:id',function(req,res){
//     console.log('GET/restaurants');
//     console.log('restaurantModel',restaurantModel);
//     restaurantModel.findById({ _id: req.params.id},function(err,restaurantDb){
//         console.log('err', err);
//         console.log('restaurantDb', restaurantDb);
//         if (err !== null) {
//             console.log('Cannot get result err', err)
//         } else {
//             console.log('restaurantDb fetched successfully');
//         }
//         res.json(  restaurantDb );
//     });
// })
// router.put('/restaurants/:id', function(req, res) {

//     var name = req.query.name;
    
//     restaurantModel.updateOne({ _id: req.params.id }, { name: name }, function(
//     err,
//     restaurantDb
//     ) {
//     console.log("update restaurantDb", restaurantDb); // returns an object of what has been updated
//     res.json({
//     data: {
//         isUpdate: true,
//         message:"name updeted"
//     }
//     });
//     });
// });
// router.delete("/restaurants/:id", function(req, res) {
//     restaurantModel.deleteOne({ _id: req.params.id }, function(err, restaurantDb) {
//         console.log("delete restaurantDb", restaurantDb); // returns an object of what has been deleted
//         res.json({
//         success: true,
//         data: {
//             isDeleted: true,
//             message:"your restaurant is deleted succefully"
//         }
//         });
//     });
// });

module.exports=router;