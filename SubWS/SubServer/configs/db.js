const mongoose = require('mongoose')

const connectDB = () =>
{
  mongoose.connect('mongodb://127.0.0.1:27017/movieProjectDB')
  .then(()=> console.log('Connetcted movieProjectDB'))
  .catch((error)=>console.log(error))
}

module.exports = connectDB;