const mongoose = require('mongoose');

mongoose.set("strictQuery", false)
mongoose.connect(`${process.env.MONGO_URL}`)
   .then(()=> console.log("DB CONNECTED"))