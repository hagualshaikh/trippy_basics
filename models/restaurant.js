var mongoose= require('mongoose');

var restaurantSchema = new mongoose.Schema({
    //   _id: Schema.Types.ObjectId,
    name: String,
      city: String,
      country:String,
      stars: Number,
      cuisine: String,
      
      priceCategory:Number,
      address: String
    });
    var model = mongoose.model('Restaurant',restaurantSchema)
    

   
    module.exports = model;