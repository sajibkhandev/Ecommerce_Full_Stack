const mongoose = require('mongoose');
const mongodbConfig=()=>{
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.ur9bur3.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));
}

module.exports=mongodbConfig