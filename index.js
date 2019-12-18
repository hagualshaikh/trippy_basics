var mongoose= require('mongoose');

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