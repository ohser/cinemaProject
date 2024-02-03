const mongoose = require('mongoose')

const connectDB = () =>
{
  mongoose.connect('mongodb://127.0.0.1:27017/cinemaDB')
  .then(()=> console.log('Connetcted cinemaDB'))
  .catch((error)=>console.log(error))
}

module.exports = connectDB;