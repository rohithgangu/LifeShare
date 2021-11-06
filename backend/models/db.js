const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/lifeshare',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("db connected");
})
const db = {}
db.mongoose = mongoose
db.donorregschema = require('./controllers/Donorschema')

module.exports= db