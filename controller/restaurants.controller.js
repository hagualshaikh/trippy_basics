const  express  = require('express');

var router = express.Router();
const restaurantModel = require('../models/restaurant');






//...................route Restaurant............................................................
router.post('/restaurants',function(req,res){
    console.log('req.body',req.body)
    var {name,stars,priceCategory,city,country,address,cuisine} = req.body;

    var restaurant = new restaurantModel   ({
        name: name,
        stars: stars,
        priceCategory: priceCategory,
        city: city,
        country:country,
        address:address,
        cuisine:cuisine
    });
    restaurant.save(function(err,restaurantDb){
        console.log('err',err),
        console.log('restaurantDb',restaurantDb)
       
        res.json(restaurantDb)
    });
    
});
router.get('/restaurants',function(req,res){
    console.log('GET/restaurants');
    console.log('restaurantModel',restaurantModel);
    var limit =parseInt(req.query.limit);
    restaurantModel.find({}).limit(limit).exec(function(err,restaurantDb){
        console.log('err', err);
        console.log('restaurantDb', restaurantDb);
        if (err !== null) {
            console.log('Cannot get result err', err)
        } else {
            console.log('result fetched successfully');
        }
        res.json(  restaurantDb );
    });

})
router.get('/restaurants/:id',function(req,res){
    console.log('GET/restaurants');
    console.log('restaurantModel',restaurantModel);
    restaurantModel.findById({ _id: req.params.id},function(err,restaurantDb){
        console.log('err', err);
        console.log('restaurantDb', restaurantDb);
        if (err !== null) {
            console.log('Cannot get result err', err)
        } else {
            console.log('restaurantDb fetched successfully');
        }
        res.json(  restaurantDb );
    });
})
router.put('/restaurants/:id', function(req, res) {

    var name = req.query.name;
    
    restaurantModel.updateOne({ _id: req.params.id }, { name: name }, function(
    err,
    restaurantDb
    ) {
    console.log("update restaurantDb", restaurantDb); // returns an object of what has been updated
    res.json({
    data: {
        isUpdate: true,
        message:"name updeted"
    }
    });
    });
});
router.delete("/restaurants/:id", function(req, res) {
    restaurantModel.deleteOne({ _id: req.params.id }, function(err, restaurantDb) {
        console.log("delete restaurantDb", restaurantDb); // returns an object of what has been deleted
        res.json({
        success: true,
        data: {
            isDeleted: true,
            message:"your restaurant is deleted succefully"
        }
        });
    });
});

module.exports=router;