var mongoose= require('mongoose');

var roomSchema = new mongoose.Schema({
    //   _id: Schema.Types.ObjectId,
    people: Number,
      city: String,
      price:Number,
      isBathroom: Boolean
      
    
    });
    var model = mongoose.model('Room',roomSchema)
    

   
    module.exports = model;