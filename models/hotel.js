var mongoose= require('mongoose');

var hotelSchema = new mongoose.Schema({
    //   _id: Schema.Types.ObjectId,
    name: String,
      city: String,
      country:String,
      stars: Number,
      hasSpa: Boolean,
      hasPool:Boolean,
      priceCategory:Number,
      address: String,
      rooms:[{ type: mongoose.Types.ObjectId, ref: 'room'}]
    });
    var model = mongoose.model('hotel',hotelSchema)
    

   
    module.exports = model;