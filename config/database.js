const mongoose = require('mongoose');



const db = async() => {
   await mongoose.connect(process.env.MONGO_URI, {
        dbName: 'restApi',
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("mondoDb connectt");
    }).catch((err) => {
        console.log(err);
    })

}

module.exports = db