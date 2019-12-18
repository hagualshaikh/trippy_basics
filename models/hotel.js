var mongoose= require('mongoose');

var hotelSchema = new mongoose.Schema({
    //   _id: Schema.Types.ObjectId,
      firstName: String,
      surname: String,
      address: { type: mongoose.Types.ObjectId, ref: 'Address'}
    });